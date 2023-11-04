export default async (req, res) => {
  const { accountTypeID } = req.query;

  try {
    const response = await fetch(
      `http://na-prd-hda.ict.griffith.edu.au:8080/accountType/${accountTypeID}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch account type." });
  }
};
