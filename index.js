angular.module('app', []);


angular
    .module('app')
    .controller('BudgetController', BudgetController);

function BudgetController() {
    var vm = this;

    // create an income array(vm.incomes = [])
      vm.incomes = [];

    // create an expense array (vm.expenses = [])

    // create an addIncome function
    vm.addIncome = function() {
        vm.incomes.push(vm.newIncome);
        vm.newIncome = {};
}
        // create an expense array (vm.expenses = [])
        vm.expenses = [];

        // create an addIncome function
        vm.addExpense = function() {
            vm.expenses.push(vm.newExpense);
            vm.newExpense = {};


        }

        vm.getTotalIncome = function() {
            var runningTotal = 0;
            angular.forEach(vm.incomes, function(income, index) {
                runningTotal += parseFloat(income.amount);
            });
            return runningTotal;
        };

        vm.getTotalExpense = function() {
            var runningTotal = 0;
            angular.forEach(vm.expenses, function(expense, index) {
                runningTotal += parseFloat(expense.amount);
            });
            return runningTotal;
}

};
