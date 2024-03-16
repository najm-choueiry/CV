type Response = {
    status: (code: number) => {
        json: (data: Record<string, any>) => void;
    };
};

export default (req: any, res: Response) => {
    res.status(200).json({ name: "John Doe" });
};
