const Reader = require("./../lib/utils/Reader")
const ExplorerService = require("./../lib/services/ExplorerServices")

describe("Unit Test for Services", () =>{
    const explorer = [{"name": "Woopa1","githubUsername": "ajolonauta1","score": 1,"mission": "java"},
            {"name": "Woopa2","githubUsername": "ajolonauta2","score": 2,"mission": "node"},
            {"name": "Woopa3","githubUsername": "ajolonauta3","score": 3,"mission": "python",}]

    test('1) filterByMission', () =>{      
        const explorersInNode = ExplorerService.filterByMission(explorer, "node")
        const prueba = [{"name": "Woopa2","githubUsername": "ajolonauta2","score": 2,"mission": "node"}]
        expect(explorersInNode).toStrictEqual(prueba)
    })
    test('2) getAmountOfExplorersByMission', () =>{
        const userInNode = ExplorerService.getAmountOfExplorersByMission(explorer, "node");

        expect(userInNode).toBe("Cantidad de Explorers en mision Node: 1")
    })
    test('3) getExplorersUsernamesByMission', () =>{
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorer, "node")

        expect(usernamesInNode).toStrictEqual("Los Username son: ajolonauta2")
    })
});