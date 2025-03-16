import { Stock } from './types';

export const initialStocks: Stock[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 150.25,
    previousPrice: 149.8,
    percentageChange: 0.3,
    volume: 1000000,
    estimatedProfit: 0, // Initialize estimated profit
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 2750.8,
    previousPrice: 2745.5,
    percentageChange: 0.19,
    volume: 500000,
    estimatedProfit: 0,
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 285.9,
    previousPrice: 283.75,
    percentageChange: 0.76,
    volume: 750000,
    estimatedProfit: 0,
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 3300.45,
    previousPrice: 3290.2,
    percentageChange: 0.31,
    volume: 600000,
    estimatedProfit: 0,
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 890.5,
    previousPrice: 885.3,
    percentageChange: 0.59,
    volume: 900000,
    estimatedProfit: 0,
  },
  {
    symbol: 'FB',
    name: 'Facebook Inc.',
    price: 340.5,
    previousPrice: 338.5,
    percentageChange: 0.72,
    volume: 1200000,
    estimatedProfit: 0,
  },
  {
    symbol: 'NFLX',
    name: 'Netflix Inc.',
    price: 745.5,
    previousPrice: 735.75,
    percentageChange: 1.09,
    volume: 800000,
    estimatedProfit: 0,
  },
  {
    symbol: 'BND',
    name: 'Bond Insurance ETF',
    price: 105.3,
    previousPrice: 104.8,
    percentageChange: 0.48,
    volume: 300000,
    estimatedProfit: 0,
  },
  {
    symbol: 'MF-Growth',
    name: 'Mutual Fund - Growth Fund',
    price: 150.7,
    previousPrice: 149.9,
    percentageChange: 0.53,
    volume: 200000,
    estimatedProfit: 0,
  },
  {
    symbol: 'MF-Debt',
    name: 'Mutual Fund - Debt Fund',
    price: 95.4,
    previousPrice: 95.0,
    percentageChange: 0.42,
    volume: 250000,
    estimatedProfit: 0,
  },
  {
    symbol: 'FD-1Y',
    name: 'Fixed Deposit - 1 Year',
    price: 1000,
    previousPrice: 1000,
    percentageChange: 0,
    volume: 0,
    estimatedProfit: 0,
  },
  {
    symbol: 'FD-5Y',
    name: 'Fixed Deposit - 5 Years',
    price: 1000,
    previousPrice: 1000,
    percentageChange: 0,
    volume: 0,
    estimatedProfit: 0,
  }
];

// Function to update stock prices and estimated profit dynamically
export function generateMockPriceUpdate(stock: Stock, quantity: number, expectedPrice: number): Stock {
  if (stock.symbol.startsWith("FD")) {
    return stock;
  }

  const priceChange = (Math.random() - 0.5) * (stock.price * 0.02);
  const newPrice = stock.price + priceChange;
  const percentageChange =
    ((newPrice - stock.previousPrice) / stock.previousPrice) * 100;

  // Calculate estimated profit
  const estimatedProfit = (expectedPrice - newPrice) * quantity;

  return {
    ...stock,
    previousPrice: stock.price,
    price: Number(newPrice.toFixed(2)),
    percentageChange: Number(percentageChange.toFixed(2)),
    volume: stock.volume + Math.floor(Math.random() * 10000),
    estimatedProfit: Number(estimatedProfit.toFixed(2)), // Store estimated profit in stock
  };
}
