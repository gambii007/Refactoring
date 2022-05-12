class ExploreService{

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return `Cantidad de Explorers en mision Node: ${explorersInNode.length}`
    }

    static getExplorersUsernamesByMission(explorers, mission){

    }

}

module.exports =  ExploreService