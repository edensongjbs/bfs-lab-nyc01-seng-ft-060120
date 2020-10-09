function bfs(rootNode, vertices, edges){
    // rootNode = vertices[0]
    let adjacentVertices, firstNode
    let queue = []
    queue.push(rootNode)
    let final = []
        // queue = [rootNode]
    while(queue.length !== 0) {
        firstNode = queue.shift()
        final.push(firstNode)
        // console.log(firstNode)
        if (firstNode.distance === null){firstNode.distance=0}
        // console.log(queue, firstNode, vertices, edges)
        adjacentVertices = findAdjacent(firstNode.name, vertices, edges)

        adjacentVertices = markDistanceAndPredecessor(firstNode, adjacentVertices)

        for (const vertex of adjacentVertices) {
            queue.push(vertex)
            // final.push(vertex)
        }
        console.log(final, queue, adjacentVertices)
    }
    return final
}

function otherVertex(node, edge) {
    return edge[0]===node ? edge[1] : edge[0]
} 

function findAdjacent(rootNode, vertices, edges) {
    let vertexName, theVertex, adjacents = []
    edges.forEach(edge => {
        if (edge.includes(rootNode)) {
            vertexName = otherVertex(rootNode, edge)
            theVertex = (vertices.find(vert => vert.name===vertexName))
            if (theVertex.distance===null){adjacents.push(theVertex)}
        }
    })
    // debugger
    return adjacents.filter(adj => adj.distance===null)
}

function markDistanceAndPredecessor(rootNode, adjNodes) {
    const newDistance = rootNode.distance+1
    return adjNodes.map(vertex => ({name: vertex.name, distance:newDistance, predecessor:rootNode}))
}

let edges2 = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let vertices2 = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
    {name: '28th&Bwy', distance: null, predecessor: null},

  {name: '14th&6th', distance: null, predecessor: null},
  {name: '23rd&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null},
  {name: '23rd&Lex', distance: null, predecessor: null}
]

bfs(vertices2[0], vertices2, edges2)