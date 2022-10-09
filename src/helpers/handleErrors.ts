import { Response } from "express";

export const badRequest = (res: Response, error: string, errorRaw?: any) => {
  // console.log(errorRaw);
  res.status(400).json({ error });
};

export const unAuthorized = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(401).json({ error });
};

export const notFound = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(404).json({ error });
};

export const internalError = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(500).json({ error });
};
