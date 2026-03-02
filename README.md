# Tax Calculator

**Live site:** https://pschmiege.github.io/Tax_calc/

A personal financial planning web app built with React. It calculates federal and state taxes, paycheck breakdowns, retirement savings, net worth, and long-term projections — all in real time as you adjust inputs.

Originally built for UT Southwestern employees but applicable to anyone in the supported states.

---

## Features

### Tax Calculation (2024 / 2025 / 2026)
- Federal income tax using official bracket tables for each year
- FICA / OASDI (Social Security) with annual wage base cap
- Medicare tax
- State income tax for: Texas, Florida, Nevada, Washington (no income tax), New York, California, Massachusetts, Hawaii
- Standard deduction applied per year
- Marginal and effective rate display for both federal and state

### Income & Deductions
- Primary income with optional longevity pay
- Secondary income (spouse / second job) — taxes calculated independently per paycheck, then compared against what's actually owed when filing combined
- Pre-tax retirement contributions: Traditional 401k/403b, 457b, IRA (with annual IRS limit indicators)
- Pre-tax benefit deductions: medical, dental, vision, FSA, parking
- Post-tax contributions: Roth 401k/403b, Roth 457b, Roth IRA, brokerage investments
- Custom living expenses with add/remove support
- All inputs accept multiple frequencies: annually, monthly, semimonthly, biweekly, weekly, or per paycheck

### UTSW Retirement Plans
- Supports both TRS (Teacher Retirement System) and ORP (Optional Retirement Program)
- Computes employee and employer contribution amounts based on salary and plan rates

### Tax Filing Estimate
- Compares total amount withheld across all paychecks vs. what is actually owed when filing
- Shows estimated refund or amount owed
- Recommends additional per-paycheck withholding to break even

---

## Tabs

### Breakdown
Three-column view: Primary employment, Secondary employment, and Combined filing analysis. Shows the full income waterfall from gross to final take-home, including AGI, taxable income, all withholdings, and post-tax allocations. Includes a bar chart waterfall for the combined annual picture.

### Paycheck
Per-paycheck view of all deductions, withholdings, and take-home for both primary and secondary jobs. Includes a donut chart showing how each paycheck dollar is allocated.

### Savings & Retirement
- Annual contribution summary broken down by account type (UTSW employee/employer, 401k, 457b, IRA, Roth variants, investments)
- Savings breakdown donut chart
- Savings projection chart over a configurable time horizon with base / optimistic / conservative return bands
- Savings rate as a percentage of income

### Pension
- TRS / ORP pension annuity estimator using the formula: Average of top 5 salaries × Years of Service × Multiplier %
- Configurable multiplier (default 2.3% per year for TRS)
- Year-by-year projected payout table assuming continued service and 3% annual salary growth
- Current annual contribution summary for the selected UTSW plan

### Net Worth
- Input assets: checking, high-yield savings, 401k, 457b, IRA, brokerage, home, vehicle, other
- Input liabilities: mortgage, car loan, student loans, credit card debt, other
- Net worth summary
- Projected net worth growth chart over a configurable time horizon, using the same return rate and annual savings from the main calculator

### Retirement Predictor
Compares four contribution strategies side-by-side to show which produces the most net spendable wealth at retirement:
- 100% Traditional (pre-tax)
- 100% Roth (post-tax)
- Current Split (whatever you have entered in the sidebar)
- Custom % split (adjustable slider)

For each strategy, calculates future value of all accounts at the target retirement year, applies taxes at withdrawal (traditional at retirement effective rate, brokerage gains at long-term capital gains rate, Roth tax-free), and shows net spendable total and monthly equivalent.

---

## Supported States

| State | Income Tax |
|-------|-----------|
| Texas | None |
| Florida | None |
| Nevada | None |
| Washington | None |
| New York | 4% – 10.9% |
| California | 1% – 12.3% |
| Massachusetts | 5% / 9% (over $1M) |
| Hawaii | 1% – 11% |

---

## Running Locally

**Requirements:** Node.js 18+

**First time only** — install dependencies:
```bash
npm install
```

**Start:**
```bash
npm run dev
```
Then open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser.

**Stop:**
Press `Ctrl+C` in the terminal where the server is running.

---

## Tech Stack

- [React 18](https://react.dev/) — UI and state management
- [Recharts](https://recharts.org/) — bar, pie, and area charts
- [Vite](https://vitejs.dev/) — dev server and build tool
