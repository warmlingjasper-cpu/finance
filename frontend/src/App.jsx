import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import API_URL from './api';
console.log("API_URL:", API_URL)

import meses from './data/data'
import Login from "./components/Login";

function getCookie(name) {
  const cookies = document.cookie.split(";")

  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=")

    if (key === name) {
      return decodeURIComponent(value)
    }
  }

  return null
}

let csrfToken = null

async function apiFetch(url, options = {}) {


  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  }

  if (csrfToken) {
    headers["X-CSRFToken"] = csrfToken
  }

  return fetch(url, {
    ...options,
    credentials: "include",
    headers,
  })
}



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [usuario, setUsuario] = useState(null)
  const [mes, setMes] = useState(meses[0])

  const [receitas, setReceitas] = useState({})
  const [despesas, setDespesas] = useState({})
  const [investimentos, setInvestimentos] = useState({})
  const [fundoEmergencia, setFundoEmergencia] = useState({})


  const [valorReceita, setValorReceita] = useState('')
  const [valorDespesa, setValorDespesa] = useState('')

  const [descricaoReceita, setDescricaoReceita] = useState('')
  const [descricaoDespesa, setDescricaoDespesa] = useState('')
  const [descricaoInvestimento, setDescricaoInvestimento] = useState('')
  const [valorInvestimento, setValorInvestimento] = useState('')
  const [descricaoFundo, setDescricaoFundo] = useState('')
  const [valorFundo, setValorFundo] = useState('')

  const [receitasPlanejadas, setReceitasPlanejadas] = useState({});
  const [despesasPlanejadas, setDespesasPlanejadas] = useState({});
  const [investimentosPlanejados, setInvestimentosPlanejados] = useState({});
  const [fundosPlanejados, setFundosPlanejados] = useState({});

  const [descricaoReceitaPlanejada, setDescricaoReceitaPlanejada] = useState('');
  const [valorReceitaPlanejada, setValorReceitaPlanejada] = useState('');

  const [descricaoDespesaPlanejada, setDescricaoDespesaPlanejada] = useState('');
  const [valorDespesaPlanejada, setValorDespesaPlanejada] = useState('');

  const [descricaoInvestimentoPlanejado, setDescricaoInvestimentoPlanejado] = useState('');
  const [valorInvestimentoPlanejado, setValorInvestimentoPlanejado] = useState('');

  const [descricaoFundoPlanejado, setDescricaoFundoPlanejado] = useState('');
  const [valorFundoPlanejado, setValorFundoPlanejado] = useState('');

  // Controla qual dropdown está aberto
  const [dropdownAberto, setDropdownAberto] = useState(null)

  const receitasDoMes = receitas[mes] || []
  const despesasDoMes = despesas[mes] || []
  const investimentosDoMes = investimentos[mes] || []
  const fundoDoMes = fundoEmergencia[mes] || []

  const receitasPlanejadasDoMes = receitasPlanejadas[mes] || []
  const despesasPlanejadasDoMes = despesasPlanejadas[mes] || []
  const investimentosPlanejadosDoMes = investimentosPlanejados[mes] || []
  const fundosPlanejadosDoMes = fundosPlanejados[mes] || []

  useEffect(() => {

    // VERIFICAR AUTENTICAÇÃO
    fetch(`${API_URL}/api/me/`, {
      credentials: 'include',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Usuário não autenticado')
        }

        return response.json()
      })
      .then(data => {

        console.log('USUARIO:', data)

        setIsAuthenticated(data.authenticated)
        setUsuario(data.username)
      })
      .catch(() => {
        setIsAuthenticated(false)
      })

  }, [])

  useEffect(() => {
    fetch(`${API_URL}/api/csrf/`, {
      credentials: "include",
    })
      .then(response => response.json())
      .then(data => {
        csrfToken = data.csrfToken
        console.log("CSRF carregado")
      })
  }, [])

  useEffect(() => {

    if (!isAuthenticated) {
      return
    }

    
    // RECEITAS
    fetch(`${API_URL}/api/receitas/`, {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {

        const receitasPorMes = {}

        data.forEach(receita => {

          if (!receitasPorMes[receita.mes]) {
            receitasPorMes[receita.mes] = []
          }

          receitasPorMes[receita.mes].push({
            id: receita.id,
            descricao: receita.descricao,
            valor: Number(receita.valor),
            mes: receita.mes
          })
        })

        setReceitas(receitasPorMes)
      })


    // DESPESAS
    fetch(`${API_URL}/api/despesas/`, {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {

        const despesasPorMes = {}

        data.forEach(despesa => {

          if (!despesasPorMes[despesa.mes]) {
            despesasPorMes[despesa.mes] = []
          }

          despesasPorMes[despesa.mes].push({
            id: despesa.id,
            descricao: despesa.descricao,
            valor: Number(despesa.valor),
            mes: despesa.mes
          })
        })

        setDespesas(despesasPorMes)
      })


    // INVESTIMENTOS
    fetch(`${API_URL}/api/investimentos/`, {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {

        const investimentosPorMes = {}

        data.forEach(investimento => {

          if (!investimentosPorMes[investimento.mes]) {
            investimentosPorMes[investimento.mes] = []
          }

          investimentosPorMes[investimento.mes].push({
            id: investimento.id,
            descricao: investimento.descricao,
            valor: Number(investimento.valor),
            mes: investimento.mes
          })
        })

        setInvestimentos(investimentosPorMes)
      })


    // FUNDO DE EMERGÊNCIA
    fetch(`${API_URL}/api/fundo/`, {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {

        const fundoPorMes = {}

        data.forEach(fundo => {

          if (!fundoPorMes[fundo.mes]) {
            fundoPorMes[fundo.mes] = []
          }

          fundoPorMes[fundo.mes].push({
            id: fundo.id,
            descricao: fundo.descricao,
            valor: Number(fundo.valor),
            mes: fundo.mes
          })
        })

        setFundoEmergencia(fundoPorMes)
      })

    // RECEITAS PLANEJADAS
    fetch(`${API_URL}/api/receitas-planejadas/`, {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {

        const receitasPlanejadasPorMes = {}

        data.forEach(receita => {

          if (!receitasPlanejadasPorMes[receita.mes]) {
            receitasPlanejadasPorMes[receita.mes] = []
          }

          receitasPlanejadasPorMes[receita.mes].push({
            id: receita.id,
            descricao: receita.descricao,
            valor: Number(receita.valor),
            mes: receita.mes
          })
        })

        setReceitasPlanejadas(receitasPlanejadasPorMes)
      })


    // DESPESAS PLANEJADAS
    fetch(`${API_URL}/api/despesas-planejadas/`, {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {

        const despesasPlanejadasPorMes = {}

        data.forEach(despesa => {

          if (!despesasPlanejadasPorMes[despesa.mes]) {
            despesasPlanejadasPorMes[despesa.mes] = []
          }

          despesasPlanejadasPorMes[despesa.mes].push({
            id: despesa.id,
            descricao: despesa.descricao,
            valor: Number(despesa.valor),
            mes: despesa.mes
          })
        })

        setDespesasPlanejadas(despesasPlanejadasPorMes)
      })


    // INVESTIMENTOS PLANEJADOS
    fetch(`${API_URL}/api/investimentos-planejados/`, {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {

        const investimentosPlanejadosPorMes = {}

        data.forEach(investimento => {

          if (!investimentosPlanejadosPorMes[investimento.mes]) {
            investimentosPlanejadosPorMes[investimento.mes] = []
          }

          investimentosPlanejadosPorMes[investimento.mes].push({
            id: investimento.id,
            descricao: investimento.descricao,
            valor: Number(investimento.valor),
            mes: investimento.mes
          })
        })

        setInvestimentosPlanejados(investimentosPlanejadosPorMes)
      })


    // FUNDO PLANEJADO
    fetch(`${API_URL}/api/fundo-planejado/`, {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {

        const fundosPlanejadosPorMes = {}

        data.forEach(fundo => {

          if (!fundosPlanejadosPorMes[fundo.mes]) {
            fundosPlanejadosPorMes[fundo.mes] = []
          }

          fundosPlanejadosPorMes[fundo.mes].push({
            id: fundo.id,
            descricao: fundo.descricao,
            valor: Number(fundo.valor),
            mes: fundo.mes
          })
        })

        setFundosPlanejados(fundosPlanejadosPorMes)
      })

  }, [isAuthenticated])

  console.log(receitas)
  console.log('DESPESAS:', despesas)
  console.log('INVESTIMENTOS:', investimentos)
  console.log('FUNDO:', fundoEmergencia)

  async function fazerLogout() {
    await apiFetch(`${API_URL}/api/logout/`, {
      method: 'POST',
    })

    setIsAuthenticated(false)
    setUsuario(null)
  }


  /* -------------------------
     RECEITAS
  ------------------------- */

  function adicionarReceita() {
    if (valorReceita === '') return


    apiFetch(`${API_URL}/api/receitas/`, {
      method: 'POST',
      body: JSON.stringify({
        descricao: descricaoReceita,
        valor: Number(valorReceita),
        mes: mes,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao adicionar receita')
        }

        return response.json()
      })
      .then(data => {
        console.log(data)

        const novaReceita = {
          ...data,
          valor: Number(data.valor)
        }

        setReceitas(prev => ({
          ...prev,
          [mes]: [
            ...(prev[mes] || []),
            novaReceita
          ]
        }))
      })

    setDescricaoReceita('')
    setValorReceita('')
  }

  function removerReceita(id) {
    apiFetch(`${API_URL}/api/receitas/${id}/`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(() => {
        setReceitas(prev => ({
          ...prev,
          [mes]: prev[mes].filter(
            receita => receita.id !== id
          )
        }))
      })
  }

  /* -------------------------
     DESPESAS
  ------------------------- */

  function adicionarDespesa() {
    if (valorDespesa === '') return

    apiFetch(`${API_URL}/api/despesas/`, {
      method: 'POST',
      body: JSON.stringify({
        descricao: descricaoDespesa,
        valor: Number(valorDespesa),
        mes: mes,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        console.log("RESPOSTA DESPESA:", data)
        console.log("VALOR DESPESA:", data.valor)
        console.log("NUMBER DESPESA:", Number(data.valor))

        const novaDespesa = {
          ...data,
          valor: Number(data.valor)
        }

        setDespesas(prev => ({
          ...prev,
          [mes]: [
            ...(prev[mes] || []),
            novaDespesa
          ]
        }))
      })

    setDescricaoDespesa('')
    setValorDespesa('')
  }

  function removerDespesa(id) {
    apiFetch(`${API_URL}/api/despesas/${id}/`, {
      method: 'DELETE',
    })
      .then(() => {
        setDespesas(prev => ({
          ...prev,
          [mes]: prev[mes].filter(
            despesa => despesa.id !== id
          )
        }))
      })
  }



  /* -------------------------
    INVESTIMENTOS
  ------------------------- */

  function adicionarInvestimento() {
    if (valorInvestimento === '') return

    apiFetch(`${API_URL}/api/investimentos/`, {
      method: 'POST',
      body: JSON.stringify({
        descricao: descricaoInvestimento,
        valor: Number(valorInvestimento),
        mes: mes,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const novoInvestimento = {
          ...data,
          valor: Number(data.valor)
        }

        setInvestimentos(prev => ({
          ...prev,
          [mes]: [
            ...(prev[mes] || []),
            novoInvestimento
          ]
        }))
      })

    setDescricaoInvestimento('')
    setValorInvestimento('')
  }


  function removerInvestimento(id) {
    apiFetch(`${API_URL}/api/investimentos/${id}/`, {
      method: 'DELETE',
    })
      .then(() => {
        setInvestimentos(prev => ({
          ...prev,
          [mes]: prev[mes].filter(
            investimento => investimento.id !== id
          )
        }))
      })
  }


  /* -------------------------
    FUNDO DE EMERGÊNCIA
  ------------------------- */

  function adicionarFundo() {
    if (valorFundo === '') return

    apiFetch(`${API_URL}/api/fundo/`, {
      method: 'POST',
      body: JSON.stringify({
        descricao: descricaoFundo,
        valor: Number(valorFundo),
        mes: mes,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const novoFundo = {
          ...data,
          valor: Number(data.valor)
        }

        setFundo(prev => ({
          ...prev,
          [mes]: [
            ...(prev[mes] || []),
            novoFundo
          ]
        }))
      })

    setDescricaoFundo('')
    setValorFundo('')
  }


  function removerFundo(id) {
    apiFetch(`${API_URL}/api/fundo/${id}/`, {
      method: 'DELETE',
    })
      .then(() => {
        setFundo(prev => ({
          ...prev,
          [mes]: prev[mes].filter(
            fundo => fundo.id !== id
          )
        }))
      })
  }

  /* -------------------------
   PLANEJAMENTO
  ------------------------- */

  function adicionarReceitaPlanejada() {
    if (valorReceitaPlanejada === '') return

    apiFetch(`${API_URL}/api/receitas-planejadas/`, {
      method: 'POST',

      body: JSON.stringify({
        descricao: descricaoReceitaPlanejada,
        valor: Number(valorReceitaPlanejada),
        mes: mes,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const novaReceitaPlanejada = {
          ...data,
          valor: Number(data.valor)
        }

        setReceitasPlanejadas(prev => ({
          ...prev,
          [mes]: [
            ...(prev[mes] || []),
            novaReceitaPlanejada
          ]
        }))
      })

    setDescricaoReceitaPlanejada('')
    setValorReceitaPlanejada('')
  }

  function removerReceitaPlanejada(id) {
    apiFetch(`${API_URL}/api/receitas-planejadas/${id}/`, {
      method: 'DELETE',
    })
      .then(() => {
        setReceitasPlanejadas(prev => ({
          ...prev,
          [mes]: prev[mes].filter(
            receita => receita.id !== id
          )
        }))
      })
  }

  function adicionarDespesaPlanejada() {
    if (valorDespesaPlanejada === '') return

    apiFetch(`${API_URL}/api/despesas-planejadas/`, {
      method: 'POST',

      body: JSON.stringify({
        descricao: descricaoDespesaPlanejada,
        valor: Number(valorDespesaPlanejada),
        mes: mes,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const novaDespesaPlanejada = {
          ...data,
          valor: Number(data.valor)
        }

        setDespesasPlanejadas(prev => ({
          ...prev,
          [mes]: [
            ...(prev[mes] || []),
            novaDespesaPlanejada
          ]
        }))
      })

    setDescricaoDespesaPlanejada('')
    setValorDespesaPlanejada('')
  }

  function removerDespesaPlanejada(id) {
    apiFetch(`${API_URL}/api/despesas-planejadas/${id}/`, {
      method: 'DELETE',
    })
      .then(() => {
        setDespesasPlanejadas(prev => ({
          ...prev,
          [mes]: prev[mes].filter(
            despesa => despesa.id !== id
          )
        }))
      })
  }

  function adicionarInvestimentoPlanejado() {
    if (valorInvestimentoPlanejado === '') return

    apiFetch(`${API_URL}/api/investimentos-planejados/`, {
      method: 'POST',

      body: JSON.stringify({
        descricao: descricaoInvestimentoPlanejado,
        valor: Number(valorInvestimentoPlanejado),
        mes: mes,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const novoInvestimentoPlanejado = {
          ...data,
          valor: Number(data.valor)
        }

        setInvestimentosPlanejados(prev => ({
          ...prev,
          [mes]: [
            ...(prev[mes] || []),
            novoInvestimentoPlanejado
          ]
        }))
      })

    setDescricaoInvestimentoPlanejado('')
    setValorInvestimentoPlanejado('')
  }

  function removerInvestimentoPlanejado(id) {
    apiFetch(`${API_URL}/api/investimentos-planejados/${id}/`, {
      method: 'DELETE',
    })
      .then(() => {
        setInvestimentosPlanejados(prev => ({
          ...prev,
          [mes]: prev[mes].filter(
            investimento => investimento.id !== id
          )
        }))
      })
  }

  function adicionarFundoPlanejado() {
    if (valorFundoPlanejado === '') return

    apiFetch(`${API_URL}/api/fundo-planejado/`, {
      method: 'POST',

      body: JSON.stringify({
        descricao: descricaoFundoPlanejado,
        valor: Number(valorFundoPlanejado),
        mes: mes,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const novoFundoPlanejado = {
          ...data,
          valor: Number(data.valor)
        }

        setFundosPlanejados(prev => ({
          ...prev,
          [mes]: [
            ...(prev[mes] || []),
            novoFundoPlanejado
          ]
        }))
      })

    setDescricaoFundoPlanejado('')
    setValorFundoPlanejado('')
  }

  function removerFundoPlanejado(id) {
    apiFetch(`${API_URL}/api/fundo-planejado/${id}/`, {
      method: 'DELETE',
    })
      .then(() => {
        setFundosPlanejados(prev => ({
          ...prev,
          [mes]: prev[mes].filter(
            fundo => fundo.id !== id
          )
        }))
      })
  }

  /* -------------------------
     TOTAIS
  ------------------------- */

  const totalReceitas = receitasDoMes.reduce(
    (total, receita) => total + Number(receita.valor),
    0
  )

  const totalDespesas = despesasDoMes.reduce(
    (total, despesa) => total + Number(despesa.valor),
    0
  )

  const totalInvestimentos = investimentosDoMes.reduce(
    (total, investimento) => total + Number(investimento.valor),
    0
  )

  const totalFundoEmergencia = fundoDoMes.reduce(
    (total, fundo) => total + Number(fundo.valor),
    0
  )

  const totalReceitaPlanejada = receitasPlanejadasDoMes.reduce(
    (total, receita) => total + Number(receita.valor),
    0
  )

  const totalDespesaPlanejada = despesasPlanejadasDoMes.reduce(
    (total, despesa) => total + Number(despesa.valor),
    0
  )

  const totalInvestimentoPlanejado = investimentosPlanejadosDoMes.reduce(
    (total, investimento) => total + Number(investimento.valor),
    0
  )

  const totalFundoPlanejado = fundosPlanejadosDoMes.reduce(
    (total, fundo) => total + Number(fundo.valor),
    0
  )

  const saldoDoMes =
    totalReceitas -
    totalDespesas -
    totalInvestimentos -
    totalFundoEmergencia

  const saldoPlanejado =
    totalReceitaPlanejada -
    totalDespesaPlanejada -
    totalInvestimentoPlanejado -
    totalFundoPlanejado;

  /* -------------------------
     DROPDOWN
  ------------------------- */

  function alternarDropdown(tipo) {
    if (dropdownAberto === tipo) {
      setDropdownAberto(null)
    } else {
      setDropdownAberto(tipo)
    }
  }

  if (!isAuthenticated) {
    return (
      <Login
        onLoginSuccess={() => setIsAuthenticated(true)}
      />
    )
  }

  return (
    <>
      {dropdownAberto && (
        <div
          className="page-overlay"
          onClick={() => setDropdownAberto(null)}
        ></div>
      )}
      <div className="container">

        <div className="user-bar">
          <span>Olá, {usuario}</span>

          <button onClick={fazerLogout}>
            Logout
          </button>
        </div>

        {/* -------------------------
            MÊS
        ------------------------- */}

        <section className="month-selector">

          <div>
            <h2>
              {mes}
            </h2>
          </div>

          <select
            value={mes}
            onChange={(event) => {
              setMes(event.target.value)
              setDropdownAberto(null)
            }}
          >
            {meses.map((mes) => (
              <option
                key={mes}
                value={mes}
              >
                {mes}
              </option>
            ))}
          </select>

        </section>


        {/* -------------------------
            BOX PRINCIPAL
        ------------------------- */}

        <section className="box">

          <div className="section-header">

            <span className="eyebrow">
              RESUMO MENSAL
            </span>

            <h2>
              Registros
            </h2>

            <div className="monthly-balance">

              <span className="eyebrow">
                SALDO DO MÊS
              </span>

              <strong className={saldoDoMes < 0 ? 'negative' : ''}>
                {saldoDoMes.toFixed(2)} €
              </strong>

            </div>

          </div>


          {/* -------------------------
              GRID
          ------------------------- */}

          <div className="summary-grid">


            {/* =========================
                RECEITAS
            ========================= */}

            <div
              className={`summary-card income-card ${dropdownAberto === 'receitas'
                ? 'is-open'
                : ''
                }`}
            >

              <button
                className="finance-card-button"
                type="button"
                onClick={() =>
                  alternarDropdown('receitas')
                }
              >

                <div>

                  <span className="card-label">
                    Receitas
                  </span>

                  <h3>
                    {totalReceitas.toFixed(2)} €
                  </h3>

                </div>

                <span className="card-arrow">
                  {dropdownAberto === 'receitas'
                    ? '−'
                    : '+'}
                </span>

              </button>


              {/* DROPDOWN RECEITAS */}

              {dropdownAberto === 'receitas' && (

                <div className="finance-dropdown">

                  <div className="input-group">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descrição"
                      value={descricaoReceita}
                      onChange={(event) =>
                        setDescricaoReceita(
                          event.target.value
                        )
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Valor"
                      value={valorReceita}
                      onChange={(event) =>
                        setValorReceita(
                          event.target.value
                        )
                      }
                    />

                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={adicionarReceita}
                    >
                      +
                    </button>

                  </div>


                  {/* LISTA DE RECEITAS */}

                  <div className="transactions">

                    {receitasDoMes.map(
                      (receita, index) => (

                        <div
                          className="transaction"
                          key={index}
                        >

                          <span>
                            {receita.descricao}
                          </span>

                          <span className="transaction-value">
                            {receita.valor.toFixed(2)} €
                          </span>

                          <button
                            className="delete-button"
                            type="button"
                            onClick={() =>
                              removerReceita(receita.id)
                            }
                          >
                            🗑️
                          </button>

                        </div>

                      )
                    )}

                  </div>


                  {/* TOTAL */}

                  <div className="dropdown-total">

                    Total: {totalReceitas.toFixed(2)} €

                  </div>

                </div>

              )}

            </div>


            {/* =========================
                DESPESAS
            ========================= */}

            <div
              className={`summary-card expense-card ${dropdownAberto === 'despesas'
                ? 'is-open'
                : ''
                }`}
            >

              <button
                className="finance-card-button"
                type="button"
                onClick={() =>
                  alternarDropdown('despesas')
                }
              >

                <div>

                  <span className="card-label">
                    Despesas
                  </span>

                  <h3>
                    {totalDespesas.toFixed(2)} €
                  </h3>

                </div>

                <span className="card-arrow">
                  {dropdownAberto === 'despesas'
                    ? '−'
                    : '+'}
                </span>

              </button>


              {/* DROPDOWN DESPESAS */}

              {dropdownAberto === 'despesas' && (

                <div className="finance-dropdown">

                  <div className="input-group">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descrição"
                      value={descricaoDespesa}
                      onChange={(event) =>
                        setDescricaoDespesa(
                          event.target.value
                        )
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Valor"
                      value={valorDespesa}
                      onChange={(event) =>
                        setValorDespesa(
                          event.target.value
                        )
                      }
                    />

                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={adicionarDespesa}
                    >
                      +
                    </button>

                  </div>


                  {/* LISTA DE DESPESAS */}

                  <div className="transactions">

                    {despesasDoMes.map(
                      (despesa, index) => (

                        <div
                          className="transaction"
                          key={index}
                        >

                          <span>
                            {despesa.descricao}
                          </span>

                          <span className="transaction-value">
                            {despesa.valor.toFixed(2)} €
                          </span>

                          <button
                            className="delete-button"
                            type="button"
                            onClick={() =>
                              removerDespesa(despesa.id)
                            }
                          >
                            🗑️
                          </button>

                        </div>

                      )
                    )}

                  </div>


                  {/* TOTAL */}

                  <div className="dropdown-total">

                    Total: {totalDespesas.toFixed(2)} €

                  </div>

                </div>

              )}

            </div>

            {/* =========================
                INVESTIMENTOS
              ========================= */}

            <div
              className={`summary-card investment-card ${dropdownAberto === 'investimentos'
                ? 'is-open'
                : ''
                }`}
            >

              <button
                className="finance-card-button"
                type="button"
                onClick={() =>
                  alternarDropdown('investimentos')
                }
              >

                <div>

                  <span className="card-label">
                    Investimentos
                  </span>

                  <h3>
                    {totalInvestimentos.toFixed(2)} €
                  </h3>

                </div>

                <span className="card-arrow">
                  {dropdownAberto === 'investimentos'
                    ? '−'
                    : '+'}
                </span>

              </button>


              {/* DROPDOWN INVESTIMENTOS */}

              {dropdownAberto === 'investimentos' && (

                <div className="finance-dropdown">

                  <div className="input-group">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descrição"
                      value={descricaoInvestimento}
                      onChange={(event) =>
                        setDescricaoInvestimento(
                          event.target.value
                        )
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Valor"
                      value={valorInvestimento}
                      onChange={(event) =>
                        setValorInvestimento(
                          event.target.value
                        )
                      }
                    />

                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={adicionarInvestimento}
                    >
                      +
                    </button>

                  </div>


                  {/* LISTA DE INVESTIMENTOS */}

                  <div className="transactions">

                    {investimentosDoMes.map(
                      (investimento, index) => (

                        <div
                          className="transaction"
                          key={index}
                        >

                          <span>
                            {investimento.descricao}
                          </span>

                          <span className="transaction-value">
                            {investimento.valor.toFixed(2)} €
                          </span>

                          <button
                            className="delete-button"
                            type="button"
                            onClick={() =>
                              removerInvestimento(investimento.id)
                            }
                          >
                            🗑️
                          </button>

                        </div>

                      )
                    )}

                  </div>


                  {/* TOTAL */}

                  <div className="dropdown-total">

                    Total: {totalInvestimentos.toFixed(2)} €

                  </div>

                </div>

              )}

            </div>

            {/* =========================
                EMERGÊNCIA
              ========================= */}

            <div
              className={`summary-card emergency-card ${dropdownAberto === 'emergencia'
                ? 'is-open'
                : ''
                }`}
            >

              <button
                className="finance-card-button"
                type="button"
                onClick={() =>
                  alternarDropdown('emergencia')
                }
              >

                <div>

                  <span className="card-label">
                    Fundo de emergência
                  </span>

                  <h3>
                    {totalFundoEmergencia.toFixed(2)} €
                  </h3>

                </div>

                <span className="card-arrow">
                  {dropdownAberto === 'emergencia'
                    ? '−'
                    : '+'}
                </span>

              </button>


              {/* DROPDOWN INVESTIMENTOS */}

              {dropdownAberto === 'emergencia' && (

                <div className="finance-dropdown">

                  <div className="input-group">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descrição"
                      value={descricaoFundo}
                      onChange={(event) =>
                        setDescricaoFundo(
                          event.target.value
                        )
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Valor"
                      value={valorFundo}
                      onChange={(event) =>
                        setValorFundo(
                          event.target.value
                        )
                      }
                    />

                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={adicionarFundo}
                    >
                      +
                    </button>

                  </div>


                  {/* LISTA DE INVESTIMENTOS */}

                  <div className="transactions">

                    {fundoDoMes.map(
                      (fundo, index) => (

                        <div
                          className="transaction"
                          key={fundo.id}
                        >

                          <span>
                            {fundo.descricao}
                          </span>

                          <span className="transaction-value">
                            {fundo.valor.toFixed(2)} €
                          </span>

                          <button
                            className="delete-button"
                            type="button"
                            onClick={() =>
                              removerFundo(fundo.id)
                            }
                          >
                            🗑️
                          </button>

                        </div>

                      )
                    )}

                  </div>


                  {/* TOTAL */}

                  <div className="dropdown-total">

                    Total: {totalFundoEmergencia.toFixed(2)} €

                  </div>

                </div>

              )}

            </div>
          </div>
        </section>

        {/* PLANEJADO */}

        <section className="box">

          <div className="section-header">

            <span className="eyebrow">Planejamento</span>

            <h2>
              Objetivo
            </h2>

            <div className="monthly-balance">
              <span className="eyebrow">SALDO PLANEJADO</span>

              <strong className={saldoPlanejado < 0 ? 'negative' : ''}>
                {saldoPlanejado.toFixed(2)} €
              </strong>
            </div>

          </div>


          <div className="summary-grid">


            {/* RECEITAS PLANEJADAS */}

            <div
              className={`summary-card income-card ${dropdownAberto === 'receitaPlanejada'
                ? 'is-open'
                : ''
                }`}
            >

              <button
                className="finance-card-button"
                type="button"
                onClick={() =>
                  alternarDropdown('receitaPlanejada')
                }
              >

                <div>

                  <span className="card-label">
                    Receitas
                  </span>

                  <h3>
                    {totalReceitaPlanejada.toFixed(2)} €
                  </h3>

                </div>

                <span className="card-arrow">
                  {dropdownAberto === 'receitaPlanejada'
                    ? '−'
                    : '+'}
                </span>

              </button>


              {dropdownAberto === 'receitaPlanejada' && (

                <div className="finance-dropdown">

                  <div className="input-group">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descrição"
                      value={descricaoReceitaPlanejada}
                      onChange={(event) =>
                        setDescricaoReceitaPlanejada(
                          event.target.value
                        )
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Valor"
                      value={valorReceitaPlanejada}
                      onChange={(event) =>
                        setValorReceitaPlanejada(
                          event.target.value
                        )
                      }
                    />

                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={adicionarReceitaPlanejada}
                    >
                      +
                    </button>

                  </div>


                  <div className="transactions">

                    {receitasPlanejadasDoMes.map(
                      (receita) => (

                        <div
                          className="transaction"
                          key={receita.id}
                        >

                          <span>
                            {receita.descricao}
                          </span>

                          <span className="transaction-value">
                            {receita.valor.toFixed(2)} €
                          </span>

                          <button
                            className="delete-button"
                            type="button"
                            onClick={() =>
                              removerReceitaPlanejada(
                                receita.id
                              )
                            }
                          >
                            🗑️
                          </button>

                        </div>

                      )
                    )}

                  </div>


                  <div className="dropdown-total">

                    Total: {totalReceitaPlanejada.toFixed(2)} €

                  </div>

                </div>

              )}

            </div>


            {/* DESPESAS PLANEJADAS */}

            <div
              className={`summary-card expense-card ${dropdownAberto === 'despesaPlanejada'
                ? 'is-open'
                : ''
                }`}
            >

              <button
                className="finance-card-button"
                type="button"
                onClick={() =>
                  alternarDropdown('despesaPlanejada')
                }
              >

                <div>

                  <span className="card-label">
                    Despesas
                  </span>

                  <h3>
                    {totalDespesaPlanejada.toFixed(2)} €
                  </h3>

                </div>

                <span className="card-arrow">
                  {dropdownAberto === 'despesaPlanejada'
                    ? '−'
                    : '+'}
                </span>

              </button>


              {dropdownAberto === 'despesaPlanejada' && (

                <div className="finance-dropdown">

                  <div className="input-group">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descrição"
                      value={descricaoDespesaPlanejada}
                      onChange={(event) =>
                        setDescricaoDespesaPlanejada(
                          event.target.value
                        )
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Valor"
                      value={valorDespesaPlanejada}
                      onChange={(event) =>
                        setValorDespesaPlanejada(
                          event.target.value
                        )
                      }
                    />

                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={adicionarDespesaPlanejada}
                    >
                      +
                    </button>

                  </div>


                  <div className="transactions">

                    {despesasPlanejadasDoMes.map(
                      (despesa) => (

                        <div
                          className="transaction"
                          key={despesa.id}
                        >

                          <span>
                            {despesa.descricao}
                          </span>

                          <span className="transaction-value">
                            {despesa.valor.toFixed(2)} €
                          </span>

                          <button
                            className="delete-button"
                            type="button"
                            onClick={() =>
                              removerDespesaPlanejada(
                                despesa.id
                              )
                            }
                          >
                            🗑️
                          </button>

                        </div>

                      )
                    )}

                  </div>


                  <div className="dropdown-total">

                    Total: {totalDespesaPlanejada.toFixed(2)} €

                  </div>

                </div>

              )}

            </div>


            {/* INVESTIMENTOS PLANEJADOS */}

            <div
              className={`summary-card investment-card ${dropdownAberto === 'investimentoPlanejado'
                ? 'is-open'
                : ''
                }`}
            >

              <button
                className="finance-card-button"
                type="button"
                onClick={() =>
                  alternarDropdown('investimentoPlanejado')
                }
              >

                <div>

                  <span className="card-label">
                    Investimentos
                  </span>

                  <h3>
                    {totalInvestimentoPlanejado.toFixed(2)} €
                  </h3>

                </div>

                <span className="card-arrow">
                  {dropdownAberto === 'investimentoPlanejado'
                    ? '−'
                    : '+'}
                </span>

              </button>


              {dropdownAberto === 'investimentoPlanejado' && (

                <div className="finance-dropdown">

                  <div className="input-group">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descrição"
                      value={descricaoInvestimentoPlanejado}
                      onChange={(event) =>
                        setDescricaoInvestimentoPlanejado(
                          event.target.value
                        )
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Valor"
                      value={valorInvestimentoPlanejado}
                      onChange={(event) =>
                        setValorInvestimentoPlanejado(
                          event.target.value
                        )
                      }
                    />

                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={adicionarInvestimentoPlanejado}
                    >
                      +
                    </button>

                  </div>


                  <div className="transactions">

                    {investimentosPlanejadosDoMes.map(
                      (investimento) => (

                        <div
                          className="transaction"
                          key={investimento.id}
                        >

                          <span>
                            {investimento.descricao}
                          </span>

                          <span className="transaction-value">
                            {investimento.valor.toFixed(2)} €
                          </span>

                          <button
                            className="delete-button"
                            type="button"
                            onClick={() =>
                              removerInvestimentoPlanejado(
                                investimento.id
                              )
                            }
                          >
                            🗑️
                          </button>

                        </div>

                      )
                    )}

                  </div>


                  <div className="dropdown-total">

                    Total: {totalInvestimentoPlanejado.toFixed(2)} €

                  </div>

                </div>

              )}

            </div>


            {/* FUNDO DE EMERGÊNCIA PLANEJADO */}

            <div
              className={`summary-card emergency-card ${dropdownAberto === 'fundoPlanejado'
                ? 'is-open'
                : ''
                }`}
            >

              <button
                className="finance-card-button"
                type="button"
                onClick={() =>
                  alternarDropdown('fundoPlanejado')
                }
              >

                <div>

                  <span className="card-label">
                    Fundo de emergência
                  </span>

                  <h3>
                    {totalFundoPlanejado.toFixed(2)} €
                  </h3>

                </div>

                <span className="card-arrow">
                  {dropdownAberto === 'fundoPlanejado'
                    ? '−'
                    : '+'}
                </span>

              </button>


              {dropdownAberto === 'fundoPlanejado' && (

                <div className="finance-dropdown">

                  <div className="input-group">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descrição"
                      value={descricaoFundoPlanejado}
                      onChange={(event) =>
                        setDescricaoFundoPlanejado(
                          event.target.value
                        )
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Valor"
                      value={valorFundoPlanejado}
                      onChange={(event) =>
                        setValorFundoPlanejado(
                          event.target.value
                        )
                      }
                    />

                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={adicionarFundoPlanejado}
                    >
                      +
                    </button>

                  </div>


                  <div className="transactions">

                    {fundosPlanejadosDoMes.map(
                      (fundo) => (

                        <div
                          className="transaction"
                          key={fundo.id}
                        >

                          <span>
                            {fundo.descricao}
                          </span>

                          <span className="transaction-value">
                            {fundo.valor.toFixed(2)} €
                          </span>

                          <button
                            className="delete-button"
                            type="button"
                            onClick={() =>
                              removerFundoPlanejado(
                                fundo.id
                              )
                            }
                          >
                            🗑️
                          </button>

                        </div>

                      )
                    )}

                  </div>


                  <div className="dropdown-total">

                    Total: {totalFundoPlanejado.toFixed(2)} €

                  </div>

                </div>

              )}

            </div>


          </div>

        </section>
      </div >
    </>

  )
}
export default App