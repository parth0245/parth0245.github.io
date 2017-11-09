app.constant('CONSTANTS', {
        appLevel : 0,
        service : [
                {
                        inventoryList : 'application/fixture/inventoryList.json',
                        customerList : 'application/fixture/customerList.json',
                        vendorList : 'application/fixture/vendorList.json',
                        importVendor : 'application/fixture/importVendors.json',
                        receiptList : 'application/fixture/receiptList.json',
                        paymentList : 'application/fixture/paymentList.json',
                        expenseList : 'application/fixture/expenseList.json',
                        journalList : 'application/fixture/journalList.json',
                        contraList : 'application/fixture/contraList.json',
                        ledgerList : 'application/fixture/ledgerList.json',
                        organizationUserList : 'application/fixture/organizationUserList.json',
                        organizationRoleList : 'application/fixture/organizationRoleList.json'
                },{
                        inventoryList : "live url here",
                        customerList : '',
                        vendorList : '',
                        importVendor :'',
                        receiptList :'',
                        paymentList : '',
                        expenseList : '',
                        journalList : '',
                        contraList : '',
                        ledgerList : 'application/fixture/ledgerList.json',
                        organizationUserList : '',
                        organizationRoleList : ''
                }
        ],
        headBarNavigator : [
                {url : 'Home.Dashboard', name : 'DASHBOARD' ,SelimgSrc:'application/Images/Assets/REPORTS_active.png' , imgSrc : 'application/Images/Assets/REPORTS.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Inventory', name : 'INVENTORY' , SelimgSrc:'application/Images/Assets/INVENTORY_active.png' , imgSrc : 'application/Images/Assets/INVENTORY.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Customers', name : 'CUSTOMERS' , SelimgSrc:'application/Images/Assets/CUSTOMERS_active.png' , imgSrc : 'application/Images/Assets/CUSTOMERS.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Vendors', name : 'VENDORS' , SelimgSrc:'application/Images/Assets/VENDORS_active.png' , imgSrc : 'application/Images/Assets/VENDORS.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Ledgers', name : 'LEDGERS' , SelimgSrc:'application/Images/Assets/LEDGERS_active.png' , imgSrc : 'application/Images/Assets/LEDGERS.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Banking', name : 'CASH/BANKING' ,SelimgSrc:'application/Images/Assets/CASH_BANKING_active.png' , imgSrc : 'application/Images/Assets/CASH_BANKING.png', glyphClasses : 'glyphicon glyphicon-home'}
        ],
        sideBarNavigator : [
                {url : 'Home.Sales', name : 'Sales' ,SelimgSrc:'application/Images/Assets/Sales_active.png' , imgSrc : 'application/Images/Assets/Sales.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Purchase', name : 'Purchase' , SelimgSrc:'application/Images/Assets/Purchases_active.png' , imgSrc : 'application/Images/Assets/Purchases.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Receipt', name : 'Receipt' , SelimgSrc:'application/Images/Assets/Receipts_active.png' , imgSrc : 'application/Images/Assets/Receipts.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Payments', name : 'Payments' , SelimgSrc:'application/Images/Assets/Payments_active.png' , imgSrc : 'application/Images/Assets/Payments.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Expense', name : 'Expense' , SelimgSrc:'application/Images/Assets/Expenses_active.png' , imgSrc : 'application/Images/Assets/Expenses.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Journal', name : 'Journal' , SelimgSrc:'application/Images/Assets/Journal_active.png' , imgSrc : 'application/Images/Assets/Journal.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Contra', name : 'Contra' , SelimgSrc:'application/Images/Assets/Contra_active.png' , imgSrc : 'application/Images/Assets/Contra.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.CreditNote', name : 'Credit Note' , SelimgSrc:'application/Images/Assets/Credit_Note_active.png' , imgSrc : 'application/Images/Assets/Credit_Note.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.DebitNote', name : 'Debit Note' , SelimgSrc:'application/Images/Assets/Debit_Note_active.png' , imgSrc : 'application/Images/Assets/Debit_Note.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.SalesOrder', name : 'Sales Order' ,SelimgSrc:'application/Images/Assets/Sale_Order_active.png' , imgSrc : 'application/Images/Assets/Sale_Order.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.PurchaseOrder', name : 'Purchase Order' , SelimgSrc:'application/Images/Assets/Purchase_Order_active.png' , imgSrc : 'application/Images/Assets/Purchase_Order.png', glyphClasses : 'glyphicon glyphicon-signal'}
        ],
        organizationNavigation : [
                {url : 'Home.Organization', name : 'Organization' ,SelimgSrc:'application/Images/Assets/Admin-Settings inside/Organization_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Organization_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.User', name : 'User' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Users_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Users_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Roles', name : 'Roles' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Roles_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Roles_inactive.png', glyphClasses : 'glyphicon glyphicon-home'}
        ],
        applicationNavigation :[
                {url : 'Home.Format', name : 'Format' ,SelimgSrc:'application/Images/Assets/Admin-Settings inside/Format_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Format_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Tax', name : 'Tax' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Tax_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Tax_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Accounting', name : 'Accounting' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Accounting_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Accounting_inactive.png', glyphClasses : 'glyphicon glyphicon-home'}
        ],
        gridOptionsConstants : function(gridName){
                if(gridName == 'Ledger'){
                        return {
                                enableSorting: true,
                                rowHeight: 40,
                                enableRowSelection: true,
                                enableColumnResizing: false,
                                enableRowHeaderSelection: false,
                                multiSelect : false,
                                enableColumnMenus : false,
                                enableSorting :false,
                                enableVerticalScrollbar : 0 ,
                                enablePaginationControls: false,
                                treeRowHeaderAlwaysVisible:false,
                                showColumnFooter: false,
                                columnDefs : this[gridName+"fields"]
                        }
                }
                else{
                return {
                        enableSorting: true,
                        rowHeight: 40,
                        enableRowSelection: true,
                        enableColumnResizing: false,
                        enableRowHeaderSelection: false,
                        multiSelect : false,
                        enableColumnMenus : false,
                        enableSorting :false,
                        enableVerticalScrollbar : 0 ,
                        enablePaginationControls: false,
                        paginationPageSizes: [5 , 10, 20 , 25],
                        paginationPageSize: 5,
                        treeRowHeaderAlwaysVisible:false,
                        showColumnFooter: false,
                        columnDefs : this[gridName+"fields"]
                }
        }
        },
        Paymentfields :[
                { field: 'vendorName',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                { field: 'amount',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-if="!row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                        '</span>'+
                        '</div>' },
                { field: 'date' },
                { field: 'modeOfPayment'}       
        ],
        Expensefields :[
                { field: 'vendorName',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                { field: 'amount',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-if="!row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                        '</span>'+
                        '</div>' },
                { field: 'date' },
                { field: 'expenseDescription'}       
        ],
        Journalfields :[
                { field: 'referance',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                        { field: 'date' },
                        { field: 'fromLedger'},
                        { field: 'toLedger'},
                        { field: 'amount'},
        ],
        Contrafields :[
                { field: 'transferredFrom',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                        { field: 'transferredTo' },
                        { field: 'date'},
                        { field: 'reference'},
                        { field: 'amount'},
        ],
        Receiptfields :[
                { field: 'customerName',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                '</span>'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '</div>' },
        { field: 'amount',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-if="!row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                '</span>'+
                '</div>' },
        { field: 'date' },
        { field: 'modeOfPayment'}
        ],
        Inventoryfields : [
                { field: 'product',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                              '<span>{{grid.getCellValue(row, col)}}</span>'+
                              '<span class="productInactive" ng-if="!row.isSelected">'+
                              '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                              '</span>'+
                              '<span class="productInactive" ng-if="row.isSelected">'+
                              '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                              '</span>'+
                              '</div>' },
              { field: 'ledger',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-if="!row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                        '</span>'+
                        '</div>' },
              { field: 'specification' },
              { field: 'stockCount'},
              { field: 'vendor',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                            '<span>{{grid.getCellValue(row, col)}}</span>'+
                            '<span class="productInactive" ng-if="!row.isSelected">'+
                            '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                            '</span>'+
                            '<span class="productInactive" ng-if="row.isSelected">'+
                            '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                            '</span>'+
                            '</div>' },
              { field: 'status'}
],
Customerfields : [
        { field: 'name',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                '</span>'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '</div>' },
        { field: 'ledger',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-if="!row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                '</span>'+
                '</div>' },
        { field: 'address' },
        { field: 'type'},
        { field: 'contact'},
        { field: 'status'}
],
Vendorfields : [
        { field: 'name',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                '</span>'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '</div>' },
        { field: 'ledger',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-if="!row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                '</span>'+
                '</div>' },
        { field: 'address' },
        { field: 'product'},
        { field: 'contact'},
        { field: 'status'}
],
ImportVendorfields : [
        { field: 'vendorName' },
        { field: 'address'},
        { field: 'contact'},
        { field: 'rowNo'}
],
OrganizationUserfields : [
        { field: 'userName' ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
        '</span>'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>' },
        { field: 'name'},
        { field: 'createdOn'},
        { field: 'updatedOn'},
        { field: 'mobile'},
        { field: 'role'},
        { field: 'status'}
],
Ledgerfields : [],
RoleListfields : []
});