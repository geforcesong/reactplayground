import { BudgetProvider } from "./contexts/BudgetContext";
import Budget from "./Budget";
function BudgetWrapper() {
    return (  
        <BudgetProvider>
            <Budget></Budget>
        </BudgetProvider>
    );
}

export default BudgetWrapper;