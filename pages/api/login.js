// pages/api/login.js
export default async (req, res) => {
  const { customerID } = req.body;

  try {
    const response = await fetch(
      `http://na-prd-hda.ict.griffith.edu.au:8080/customer/${customerID}`
    );
    const data = await response.json();

    // We send back only the necessary data, not the entire user object
    res.status(200).json({
      customerID: data.customerID,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch data." });
  }
};
