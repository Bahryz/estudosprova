import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TarefaListar from "./components/tarefa/TarefaListar";
import TarefasConcluidas from "./components/tarefa/TarefasConcluidas";
import TarefasNaoConcluidas from "./components/tarefa/TarefasNaoConcluidas";
import TarefaCadastrar from "./components/tarefa/TarefaCadastrar";


function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listar"}>
                  Listar Tarefas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarconcluidas"}>
                  Listar Tarefas Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarnaoconcluidas"}>
                  Listar Tarefas Não Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/cadastrar"}>
                  Cadastrar Tarefa{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<TarefaListar/>} />
            <Route
              path="/pages/tarefa/listar"
              element={<TarefaListar />}
            />
            <Route
              path="/pages/tarefa/listarconcluidas"
              element={<TarefasConcluidas />}
            />
            <Route
              path="/pages/tarefa/listarnaoconcluidas"
              element={<TarefasNaoConcluidas />}
            />
            <Route
              path="/pages/tarefa/cadastrar"
              element={<TarefaCadastrar/>}
            />
          </Routes>
          <footer>
            <p>Desenvolvido por Pedro Bahry</p>
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;