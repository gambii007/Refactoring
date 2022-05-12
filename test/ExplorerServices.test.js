const Reader = require("./../lib/utils/Reader")
const ExplorerService = require("./../lib/services/ExplorerServices")

describe("Unit Test for Services", () =>{
    test('1) filterByMission', () =>{
        const explorer = [{"name": "Woopa1","githubUsername": "ajolonauta1","score": 1,"mission": "java"},
            {"name": "Woopa2","githubUsername": "ajolonauta2","score": 2,"mission": "node"},
            {"name": "Woopa3","githubUsername": "ajolonauta3","score": 3,"mission": "python",}]
        
        const explorersInNode = ExplorerService.filterByMission(explorer, "node")
        const prueba = [{"name": "Woopa2","githubUsername": "ajolonauta2","score": 2,"mission": "node"}]
        expect(explorersInNode).toStrictEqual(prueba)
    })
    test('2) getAmountOfExplorersByMission', () =>{
        const explorers = Reader.readJsonFile("explorers.json")
        const userInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");

        expect(userInNode).toBe("Cantidad de Explorers en mision Node: 10")
    })
    test('3) getExplorersUsernamesByMission', () =>{
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);

        expect(usernamesInNode).toStrictEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"])
    })
});