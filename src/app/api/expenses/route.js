import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    // You can access the request body using req.body
    const expenseData = req.body;

    // You can now use expenseData to save or process the data as needed
    // For demonstration purposes, we'll simply return the received data as is
    return res.status(200).json(expenseData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
}
