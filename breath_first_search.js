// (Breath-First-Search, BFS) / (Depth-First-Search, DFS).
// For implementation we will use "queue"

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

// the method will return "true" if we have connection between points in graph
function breathFirstSearch (graph, start, end) {
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
    return false;
}

console.log(breathFirstSearch(graph, 'a', 'g'));
