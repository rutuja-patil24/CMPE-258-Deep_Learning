const stockList = document.getElementById('stock-list');
const portfolioList = document.getElementById('portfolio-list');
const addStockButton = document.getElementById('add-stock-button');
const addPortfolioButton = document.getElementById('add-portfolio-button');
const portfolioChartCanvas = document.getElementById('portfolio-chart');

// Chart.js instance
let portfolioChart = null;

// Dummy stock data
const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 275.50 },
    { symbol: 'GOOG', name: 'Alphabet Inc.', price: 2500.75 }
];

// Dummy portfolio data
const portfolio = [
    { symbol: 'AAPL', shares: 10 },
    { symbol: 'MSFT', shares: 5 }
];

// Display stocks
function displayStocks() {
    stockList.innerHTML = '';
    stocks.forEach((stock, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${stock.name} (${stock.symbol}): $${stock.price} 
            <button class="delete-stock" data-index="${index}">Delete</button>`;
        stockList.appendChild(listItem);
    });

    // Add event listeners for delete buttons *after* they are added to the DOM
    document.querySelectorAll('.delete-stock').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = parseInt(event.target.dataset.index);
            stocks.splice(index, 1);
            displayStocks();
            displayPortfolio(); // Recalculate portfolio if a stock is deleted
        });
    });

}

// Display portfolio and create/update chart
function displayPortfolio() {
    portfolioList.innerHTML = '';
    let totalValue = 0;
    const portfolioData = [];

    portfolio.forEach((item, index) => {
        const listItem = document.createElement('li');
        const stock = stocks.find(s => s.symbol === item.symbol);
        const itemValue = stock ? stock.price * item.shares : 0;
        totalValue += itemValue;
        listItem.innerHTML = `${item.symbol}: ${item.shares} shares ${stock ? '($' + (stock.price * item.shares).toFixed(2) + ')' : ''}
            <button class="delete-portfolio" data-index="${index}">Delete</button>`;
        portfolioList.appendChild(listItem);

        if (stock) {
          portfolioData.push({
            symbol: item.symbol,
            value: itemValue,
          })
        }
    });

     // Add event listeners for delete buttons *after* they are added to the DOM
    document.querySelectorAll('.delete-portfolio').forEach(button => {
      button.addEventListener('click', (event) => {
        const index = parseInt(event.target.dataset.index);
          portfolio.splice(index, 1);
          displayPortfolio();
      });
    });

    // Display total portfolio value and percentages.
    const totalValueElement = document.createElement('li');
    totalValueElement.textContent = `Total Portfolio Value: $${totalValue.toFixed(2)}`;
    totalValueElement.style.fontWeight = 'bold';
    portfolioList.appendChild(totalValueElement);

    portfolio.forEach((item) => {
      const stock = stocks.find(s => s.symbol === item.symbol);
      if (stock) {
        const itemValue = stock.price * item.shares;
        const percentage = (itemValue / totalValue) * 100;
        const percentageElement = document.createElement('li');
        percentageElement.textContent = `${item.symbol}: ${percentage.toFixed(2)}%`;
        portfolioList.appendChild(percentageElement)
      }
    });

    // Create or update the chart
    if (portfolioChart) {
        portfolioChart.destroy(); // Destroy the previous chart instance
    }

    const labels = portfolioData.map(item => item.symbol);
    const data = portfolioData.map(item => item.value);

    portfolioChart = new Chart(portfolioChartCanvas, {
        type: 'bar', // Use a bar chart
        data: {
            labels: labels,
            datasets: [{
                label: 'Portfolio Value', // Changed label
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow custom canvas size
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Add new stock
addStockButton.addEventListener('click', () => {
    const newStockSymbol = document.getElementById('new-stock-symbol').value.trim();
    const newStockName = document.getElementById('new-stock-name').value.trim();
    const newStockPrice = parseFloat(document.getElementById('new-stock-price').value);

    if (newStockSymbol && newStockName && !isNaN(newStockPrice)) {
        stocks.push({ symbol: newStockSymbol, name: newStockName, price: newStockPrice });
        displayStocks();
        // Clear input fields
        document.getElementById('new-stock-symbol').value = '';
        document.getElementById('new-stock-name').value = '';
        document.getElementById('new-stock-price').value = '';
    } else {
        alert('Please enter valid stock information.'); // Basic validation feedback
    }
});

// Add to portfolio
addPortfolioButton.addEventListener('click', () => {
    const newPortfolioSymbol = document.getElementById('new-portfolio-symbol').value.trim();
    const newPortfolioShares = parseInt(document.getElementById('new-portfolio-shares').value);

    if (newPortfolioSymbol && !isNaN(newPortfolioShares)) {
        // Check if the stock exists
        const stock = stocks.find(s => s.symbol === newPortfolioSymbol);
        if (!stock) {
            alert('Stock symbol not found in the Tech Stocks list.');
            return;
        }
        portfolio.push({ symbol: newPortfolioSymbol, shares: newPortfolioShares });
        displayPortfolio();
        // Clear input fields
        document.getElementById('new-portfolio-symbol').value = '';
        document.getElementById('new-portfolio-shares').value = '';
    } else {
        alert('Please enter a valid stock symbol and number of shares.'); // Basic validation feedback
    }
});

displayStocks();
displayPortfolio();