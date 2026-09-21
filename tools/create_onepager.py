from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist" / "downloads" / "Yeshe-Sampa-OnePager.pdf"
TMP = ROOT / "tmp" / "pdfs"
PHOTO = ROOT / "dist" / "yeshe-sampa.webp"

W, H = A4
INK = HexColor("#101b2d")
BLUE = HexColor("#155eef")
CYAN = HexColor("#41d9d0")
PAPER = HexColor("#f5f7fb")
MUTED = HexColor("#5f6f85")
LINE = HexColor("#dbe2ec")
WHITE = HexColor("#ffffff")

pdfmetrics.registerFont(TTFont("DejaVu", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DejaVuBold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))
pdfmetrics.registerFontFamily("DejaVu", normal="DejaVu", bold="DejaVuBold", italic="DejaVu", boldItalic="DejaVuBold")


def para(c, text, x, y_top, width, size=9.2, leading=12.2, color=INK, bold=False):
    style = ParagraphStyle(
        "p",
        fontName="DejaVuBold" if bold else "DejaVu",
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=TA_LEFT,
        spaceAfter=0,
    )
    p = Paragraph(text, style)
    _, h = p.wrap(width, H)
    p.drawOn(c, x, y_top - h)
    return h


def rounded_card(c, x, y, w, h, fill=WHITE, radius=10, stroke=None):
    c.setFillColor(fill)
    c.setStrokeColor(stroke or fill)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1 if stroke else 0)


def pill(c, text, x, y, fill=WHITE, color=INK, border=LINE):
    pad_x, height = 8, 19
    width = stringWidth(text, "DejaVuBold", 7.4) + pad_x * 2
    c.setFillColor(fill)
    c.setStrokeColor(border)
    c.roundRect(x, y, width, height, height / 2, fill=1, stroke=1)
    c.setFillColor(color)
    c.setFont("DejaVuBold", 7.4)
    c.drawString(x + pad_x, y + 6, text)
    return width


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    TMP.mkdir(parents=True, exist_ok=True)
    c = Canvas(str(OUT), pagesize=A4)
    c.setTitle("Yeshe Sampa – OnePager")
    c.setAuthor("Yeshe Sampa")
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Header band
    c.setFillColor(INK)
    c.rect(0, H - 188, W, 188, fill=1, stroke=0)
    c.setFillColor(BLUE)
    c.circle(W - 55, H - 12, 105, fill=1, stroke=0)
    c.setFillColor(CYAN)
    c.circle(W - 34, H - 8, 38, fill=1, stroke=0)

    x = 40
    c.setFillColor(CYAN)
    c.setFont("DejaVuBold", 8)
    c.drawString(x, H - 38, "ELEKTRONIKER EFZ · TECHNISCHER VERKAUFSINNENDIENST")
    c.setFillColor(WHITE)
    c.setFont("DejaVuBold", 24)
    c.drawString(x, H - 72, "Yeshe Sampa")
    para(c, "Die Schnittstelle, die Technik versteht<br/>und Verkauf zum Laufen bringt.", x, H - 89, 350, 15, 18, WHITE, True)
    para(c, "Rund 10 Jahre im technischen Berufsumfeld – zwischen Kunde, Technik und Verkauf.", x, H - 144, 345, 9.2, 12.5, HexColor("#cbd5e1"))

    # Portrait with blue frame
    photo_x, photo_y, photo_w, photo_h = 456, H - 174, 92, 120
    c.setFillColor(WHITE)
    c.roundRect(photo_x - 4, photo_y - 4, photo_w + 8, photo_h + 8, 14, fill=1, stroke=0)
    img = ImageReader(str(PHOTO))
    c.saveState()
    path = c.beginPath()
    path.roundRect(photo_x, photo_y, photo_w, photo_h, 11)
    c.clipPath(path, stroke=0, fill=0)
    c.drawImage(img, photo_x, photo_y, photo_w, photo_h, preserveAspectRatio=False, mask="auto")
    c.restoreState()

    # Profile and proof
    card_y = H - 284
    rounded_card(c, 40, card_y, 515, 76, WHITE, 12)
    c.setFillColor(BLUE)
    c.setFont("DejaVuBold", 7.5)
    c.drawString(56, card_y + 55, "MEIN PROFIL")
    para(c, "Ich übersetze technische Anforderungen in klare Angebote und halte den kaufmännischen Prozess zuverlässig am Laufen.", 56, card_y + 45, 274, 9.3, 12.2, INK, True)
    c.setStrokeColor(LINE)
    c.line(350, card_y + 14, 350, card_y + 62)
    c.setFillColor(BLUE)
    c.setFont("DejaVuBold", 7.5)
    c.drawString(368, card_y + 55, "PRAXISBELEG")
    para(c, "Bei INOVIS betreute ich einen eigenen Kundenstamm und führte technische Bedürfnisse zu passenden Lösungen und Abschlüssen.", 368, card_y + 45, 165, 7.7, 10.4, MUTED)

    # Bridge strip
    bridge_y = H - 340
    labels = [("KUNDENBEDARF", BLUE), ("TECHNIK", INK), ("VERKAUF", BLUE)]
    bx = 40
    for i, (label, color) in enumerate(labels):
        rounded_card(c, bx, bridge_y, 145, 36, WHITE, 9, LINE)
        c.setFillColor(color)
        c.setFont("DejaVuBold", 8.5)
        c.drawCentredString(bx + 72.5, bridge_y + 13, label)
        bx += 165
        if i < 2:
            c.setFillColor(CYAN)
            c.setFont("DejaVuBold", 13)
            c.drawCentredString(bx - 10, bridge_y + 11, "→")

    # Competencies
    c.setFillColor(BLUE)
    c.setFont("DejaVuBold", 8)
    c.drawString(40, H - 369, "KERNKOMPETENZEN")
    competencies = [
        "Technische Kundenberatung",
        "Offerte bis After-Sales",
        "CRM & Vertragsmanagement",
        "RMA & Support",
        "Schnittstellenkoordination",
    ]
    px, py = 40, H - 402
    for idx, item in enumerate(competencies):
        width = pill(c, item, px, py)
        px += width + 7
        if idx == 2:
            px, py = 40, py - 27

    # Strength cards
    strengths_y = H - 548
    c.setFillColor(BLUE)
    c.setFont("DejaVuBold", 8)
    c.drawString(40, strengths_y + 91, "WAS SIE VON MIR BEKOMMEN")
    strength_data = [
        ("01", "Bedarf klären", "Anforderung und Machbarkeit werden zu einer sauberen Offertengrundlage."),
        ("02", "Abläufe steuern", "CRM, Auftrag, Termine und interne Übergaben bleiben zuverlässig auf Kurs."),
        ("03", "Kunden begleiten", "Rückfragen, RMA und After-Sales führe ich lösungsorientiert zum Abschluss."),
    ]
    sx = 40
    for num, title, body in strength_data:
        rounded_card(c, sx, strengths_y, 166, 76, WHITE, 11)
        c.setFillColor(BLUE)
        c.setFont("DejaVuBold", 7.5)
        c.drawString(sx + 12, strengths_y + 57, num)
        c.setFillColor(INK)
        c.setFont("DejaVuBold", 10.5)
        c.drawString(sx + 39, strengths_y + 55, title)
        para(c, body, sx + 12, strengths_y + 44, 142, 7.8, 10.3, MUTED)
        sx += 174.5

    # Project evidence card
    proj_y = 88
    rounded_card(c, 40, proj_y, 515, 181, INK, 14)
    c.setFillColor(CYAN)
    c.setFont("DejaVuBold", 7.5)
    c.drawString(56, proj_y + 157, "EIGENPROJEKT · GITHUB")
    c.setFillColor(WHITE)
    c.setFont("DejaVuBold", 18)
    c.drawString(56, proj_y + 132, "Sidestep Deadlock")
    para(c, "Ein selbst entwickelter, datenbasierter Build-Optimizer für das Computerspiel Deadlock.", 56, proj_y + 118, 340, 8.5, 11.2, HexColor("#cbd5e1"))
    c.setFillColor(CYAN)
    c.setFont("DejaVuBold", 7.5)
    c.drawString(56, proj_y + 78, "WAS DAS PROJEKT BELEGT")
    para(c, "Eigeninitiative, analytisches Denken und die Fähigkeit, komplexe Anforderungen in ein nachvollziehbares digitales Produkt zu übersetzen.", 56, proj_y + 68, 340, 8.4, 11, WHITE, True)
    para(c, "Datenmodell · Bewertungslogik · Tests · Benutzeroberfläche", 56, proj_y + 27, 340, 7.3, 9.5, CYAN)
    qr_code = qr.QrCodeWidget("https://github.com/Gaschde/sidestep-deadlock")
    bounds = qr_code.getBounds()
    qr_drawing = Drawing(86, 86, transform=[86 / (bounds[2] - bounds[0]), 0, 0, 86 / (bounds[3] - bounds[1]), 0, 0])
    qr_drawing.add(qr_code)
    qr_drawing.drawOn(c, 435, proj_y + 61)
    c.setFillColor(HexColor("#94a3b8"))
    c.setFont("DejaVuBold", 6.8)
    c.drawCentredString(478, proj_y + 45, "GITHUB ÖFFNEN")

    # Footer contact line
    c.setFillColor(BLUE)
    c.rect(0, 0, W, 78, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("DejaVuBold", 7)
    c.setFillColor(CYAN)
    c.drawString(40, 52, "E-MAIL")
    c.drawString(218, 52, "LINKEDIN")
    c.drawString(425, 52, "REGION")
    c.setFont("DejaVu", 8.2)
    c.setFillColor(WHITE)
    c.drawString(40, 34, "sampa.yeshe@gmail.com")
    c.drawString(218, 34, "linkedin.com/in/yeshe-sampa")
    c.drawString(425, 34, "Winterthur / Zürich")
    c.setFillColor(CYAN)
    c.rect(40, 19, 515, 2, fill=1, stroke=0)

    c.showPage()
    c.save()
    print(OUT)


if __name__ == "__main__":
    main()
