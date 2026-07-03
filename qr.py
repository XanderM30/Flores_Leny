import qrcode

# 1. Define el enlace que quieres codificar
link = "https://google.com"

# 2. Genera el código QR
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(link)
qr.make(fit=True)

# 3. Crea y guarda la imagen
img = qr.make_image(fill_color="black", back_color="white")
img.save("codigo_qr.png")

print("¡Código QR generado exitosamente como 'codigo_qr.png'!")
