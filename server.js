import { server, db, PORT } from "./initServer.js"
import rotasFrutas from "./rotasFrutas.js";
import rotasUsuarios from "./rotasUsuarios.js";
import rotasTarefas from "./rotasTarefas.js";

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Hello...route /');
});

rotasFrutas(server, db)
rotasUsuarios(server, db)
rotasTarefas(server, db)

server.listen(PORT, () => {
    console.log('Server is running on port '+PORT);
});