export default async function handler(req, res) {
  const url =
    "https://lunar-cosmo.vercel.app/api/objekts/owned-by/0x65894cc66363EAdd8127868B33273A5F9a08d4C6?page=0";

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Cache-Control", "s-maxage=3600");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error en el proxy:", error);
    res
      .status(500)
      .json({ error: "Error al obtener datos desde la API externa." });
  }
}
