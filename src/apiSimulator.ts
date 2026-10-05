class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}

export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: number }[]
> => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new DataError("Failed to fetch product catalog"));
      }

      resolve([
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Headphones", price: 200 },
      ]);
    }, 1000);
  });
};

export const fetchProductReviews = (
  productId: number,
): Promise<{ rating: number; userId: number; date: string }[]> => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(
          new NetworkError(
            `Failed to fetch reviews for product ID ${productId}`,
          ),
        );
      }

      resolve([
        { rating: 1, userId: 1000235, date: "01/15/2021" },
        { rating: 2, userId: 1003124, date: "04/06/2024" },
      ]);
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<{
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
}> => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new DataError("Failed to fetch sales report"));
      }

      resolve({ totalSales: 1263, unitsSold: 3016, averagePrice: 3.23 });
    }, 1000);
  });
};
