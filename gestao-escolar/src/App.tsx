import { useForm } from "react-hook-form"
import IClass from "./intefaces/IClass";
function App() {
  const {register, handleSubmit, formState: {errors} } = useForm<IClass>();

  function onSubmit(dados: IClass) {
    console.log(dados);
  }

  return (
    <>
      <header>
        <h1>ola mundo</h1>
        <a href="">Turmas</a>
        <a href="">Criar Turmas</a>
      </header>
      <main>{/* 
        {salas.map(sala => (
          <ClassCard sala={sala} />
        ))} */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nome">nome</label>
          <input type="text" id="nome" {...register("nome", {required: "Nome Obrigatorio"})} />
          {errors.nome && <p> {errors.nome.message}</p>}
          <br />

          <label htmlFor="sala">Sua Sala</label>
          <select id="class">
            <option selected disabled></option>
            <option value="1">LAB1</option>
            <option value="2">LAB2</option>
            <option value="3">LAB3</option>
            <option value="4">LAB4</option>
          </select>
          <br />

          <label htmlFor="data">Data da sua aula</label>
          <select id="day">
            <option selected disabled></option>
            <option value="ter">Terça</option>
            <option value="qua">Quarta</option>
            <option value="qui">Quinta</option>
            <option value="sex">Sexta</option>
          </select>
          <br />

          <label htmlFor="hora">Hora da sua aula</label>
          <input type="time" id="hour" />

          <button>Enviar</button>
        </form>
      </main>
    </>
  )
}

export default App
