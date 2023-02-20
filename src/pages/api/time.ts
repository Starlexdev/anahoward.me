import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=14.6222328&lng=-90.5185188&formatted=0`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
