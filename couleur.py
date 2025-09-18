import colorsys

def hex_to_rgb(hex_color):
    """Convertit hex → tuple RGB"""
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hex(rgb):
    """Convertit tuple RGB → hex"""
    return "#{:02x}{:02x}{:02x}".format(*rgb)

def generate_shades(hex_color, steps=100):
    base_rgb = hex_to_rgb(hex_color)
    r, g, b = [x/255 for x in base_rgb]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    
    shades = []
    # On varie la luminosité de 0.05 à 0.95 pour éviter le noir/blanc pur
    for i in range(steps):
        new_l = 0.05 + (0.9 * i / (steps - 1))
        r, g, b = colorsys.hls_to_rgb(h, new_l, s)
        shades.append(rgb_to_hex((int(r*255), int(g*255), int(b*255))))
    return shades

# Exemple : bleu principal
if __name__ == "__main__":
    for shade in generate_shades("#ffffff"):
        print(shade)
