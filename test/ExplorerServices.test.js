const ExplorerService = require("./../lib/services/ExplorerServices")

describe("Unit Test for filterByMission", () =>{
    test('1) filterByMission', () =>{
        const explorer = [{"name": "Woopa1","githubUsername": "ajolonauta1","score": 1,"mission": "java"},
            {"name": "Woopa2","githubUsername": "ajolonauta2","score": 2,"mission": "node"},
            {"name": "Woopa3","githubUsername": "ajolonauta3","score": 3,"mission": "python",}]
        
        const explorersInNode = ExplorerService.filterByMission(explorer, "node")
        const prueba = [{"name": "Woopa2","githubUsername": "ajolonauta2","score": 2,"mission": "node"}]
        expect(explorersInNode).toStrictEqual(prueba)
    })
})