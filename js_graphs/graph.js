// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// the graph
const adjacencyList = new Map()

// add node
function addNode(airport) {
    adjacencyList.set(airport, [])
}

// add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

// create the graph
airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

// breadth first search
function bfs(start) {

    const visited = new Set()
    const queue = [start]

    while (queue.length > 0) {

        const airport = queue.shift()

        const destinations = adjacencyList.get(airport)

        for (const d of destinations) {
            
            if (d === 'BKK') {
                console.log('found it!')
            }

            if (!visited.has(d)) {
                visited.add(d)
                queue.push(d)
                console.log(d)
            }

        }

    }

}

// bfs('PHX')

// depth first search
function dfs(start, visited = new Set()) {
    console.log(start)
    visited.add(start)
    const destinations = adjacencyList.get(start)

    for (const d of destinations) {
        
        if (d === 'BKK') {
            console.log('Found BKK in ${} steps')
            return
        }

        if (!visited.has(d)) {
            dfs(d, visited)
        }
    
    }
}

dfs('PHX')