let recipe = [
    {id: "1", recipeName: "Pigs In a Blanket", ingredient1: "1 Sheet Puff Pastry", ingredient2: "6 Hot Dogs", ingredient3: "6 Slices Cheddar Cheese"}, 
    {id: "2", recipeName: "Peanut Butter Cookies", ingredient1: "1 Cup Peanut Butter", ingredient2: "1/2 Cup Sugar", ingredient3: "1 Egg"}, 
    {id: "3", recipeName: "Pancakes", ingredient1: "1 Banana", ingredient2: "2 Eggs", ingredient3: "1/4 teaspoon cinnamon"}
]; 

let id = 0; 

module.exports = {
    create: (req, res) => {
        const {id, recipeName, ingredient1, ingredient2, ingredient3} = req.body;
        schedule.push({id, recipeName, ingredient1, ingredient2, ingredient3});
        id++;
        res.status(200).send(schedule);
    }, 
    read: (req, res) => {
        res.status(200).send(recipe); 
    }
}