function bfs(rootNode, vertices, edges){

}

function otherVertex(node, edge) {
    return edge[0]===node ? edge[1] : edge[0]
} 

function findAdjacent(rootNode, vertices, edges) {
    let vertexName, adjacents = []
    edges.forEach(edge => {
        if (edge.includes(rootNode)) {
            vertexName = otherVertex(rootNode, edge)
            adjacents.push(vertices.find(vert => vert.name===vertexName))
        }
    })
    console.log(adjacents)
    return adjacents.filter(adj => adj.distance===null)
}