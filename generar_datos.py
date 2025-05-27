import pandas as pd

# Cargar el archivo Excel
archivo_excel = "teste.xlsx"  # Asegúrate que el nombre del archivo sea correcto
df = pd.read_excel(archivo_excel)

# Filtrar columnas necesarias
df_clean = df[['NomCliente', 'codcliente', 'Capital Soles', 'Monto Cancelacion', 'Asignacion']].copy()

# Asegurar que los números estén bien formateados
df_clean['Capital Soles'] = pd.to_numeric(df_clean['Capital Soles'], errors='coerce').fillna(0)
df_clean['Monto Cancelacion'] = pd.to_numeric(df_clean['Monto Cancelacion'], errors='coerce').fillna(0)

# Calcular oferta de cancelación (+15% sobre Monto Cancelacion)
df_clean['Oferta Cancelacion'] = (df_clean['Monto Cancelacion'] * 1.15).round(2)

# Crear contenido para datos.js
contenido = "const clientes = [\n"

for _, row in df_clean.iterrows():
    contenido += f"  {{\n"
    contenido += f"    dni: \"{str(row['codcliente']).split('.')[0]}\",\n"
    contenido += f"    nombre: \"{row['NomCliente']}\",\n"
    contenido += f"    deuda: {row['Capital Soles']},\n"
    contenido += f"    origen: \"{row['Asignacion']}\",\n"
    contenido += f"    oferta: {row['Oferta Cancelacion']},\n"
    contenido += f"    monto_cancelacion: {row['Monto Cancelacion']}\n"
    contenido += f"  }},\n"

contenido += "];"

# Guardar el archivo datos.js
with open("datos.js", "w", encoding="utf-8") as archivo:
    archivo.write(contenido)

print("Archivo datos.js generado exitosamente.")