app.service("filterService", [ 'textConstantService', function(textConstantService){
    return {
        categoryFilter: function(categories){

            return function(item){
                if (!categories.CategoryB){
                    if (item.fullInfo["category"].includes(textConstantService.categories.categoryB)){
                        return;
                    }
                }
                if(!categories.CategoryE){
                    if (item.fullInfo["category"].includes(textConstantService.categories.categoryE)){
                        return;
                    }
                }
                return item;
            }
        },

        availibilityFilter: function(useFilter){
            return function(item){
                if (useFilter){
                    if (item.availibility){
                        return item;
                    }
                }
                else{
                    return item;
                }
            }
        }
    }
}
])