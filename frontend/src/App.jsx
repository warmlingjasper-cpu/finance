import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import meses from './data/data'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

function App() {
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

  /* -------------------------
     RECEITAS
  ------------------------- */

  function adicionarReceita() {
    if (valorReceita === '') return

    setReceitas({
      ...receitas,
      [mes]: [
        ...(receitas[mes] || []),
        {
          descricao: descricaoReceita,
          valor: Number(valorReceita)
        }
      ]
    })

    setDescricaoReceita('')
    setValorReceita('')
  }

  function removerReceita(index) {
    setReceitas({
      ...receitas,
      [mes]: receitas[mes].filter((_, i) => i !== index)
    })
  }

  /* -------------------------
     DESPESAS
  ------------------------- */

  function adicionarDespesa() {
    if (valorDespesa === '') return

    setDespesas({
      ...despesas,
      [mes]: [
        ...(despesas[mes] || []),
        {
          descricao: descricaoDespesa,
          valor: Number(valorDespesa)
        }
      ]
    })

    setDescricaoDespesa('')
    setValorDespesa('')
  }

  function removerDespesa(index) {
    setDespesas({
      ...despesas,
      [mes]: despesas[mes].filter((_, i) => i !== index)
    })
  }

  /* -------------------------
   INVESTIMENTOS
  ------------------------- */

  function adicionarInvestimento() {
    if (valorInvestimento === '') return

    setInvestimentos({
      ...investimentos,
      [mes]: [
        ...(investimentos[mes] || []),
        {
          descricao: descricaoInvestimento,
          valor: Number(valorInvestimento)
        }
      ]
    })

    setDescricaoInvestimento('')
    setValorInvestimento('')
  }

  function removerInvestimento(index) {
    setInvestimentos({
      ...investimentos,
      [mes]: investimentos[mes].filter((_, i) => i !== index)
    })
  }


  /* -------------------------
    FUNDO DE EMERGÊNCIA
  ------------------------- */

  function adicionarFundo() {
    if (valorFundo === '') return

    setFundoEmergencia({
      ...fundoEmergencia,
      [mes]: [
        ...(fundoEmergencia[mes] || []),
        {
          descricao: descricaoFundo,
          valor: Number(valorFundo)
        }
      ]
    })

    setDescricaoFundo('')
    setValorFundo('')
  }

  function removerFundo(index) {
    setFundoEmergencia({
      ...fundoEmergencia,
      [mes]: fundoEmergencia[mes].filter((_, i) => i !== index)
    })
  }

    /* -------------------------
     PLANEJAMENTO
    ------------------------- */

  function adicionarReceitaPlanejada() {
    if (valorReceitaPlanejada === '') return

    setReceitasPlanejadas({
      ...receitasPlanejadas,
      [mes]: [
        ...(receitasPlanejadas[mes] || []),
        {
          descricao: descricaoReceitaPlanejada,
          valor: Number(valorReceitaPlanejada)
        }
      ]
    })

    setDescricaoReceitaPlanejada('')
    setValorReceitaPlanejada('')
  }

  function adicionarDespesaPlanejada() {
    if (valorDespesaPlanejada === '') return

    setDespesasPlanejadas({
      ...despesasPlanejadas,
      [mes]: [
        ...(despesasPlanejadas[mes] || []),
        {
          descricao: descricaoDespesaPlanejada,
          valor: Number(valorDespesaPlanejada)
        }
      ]
    })

    setDescricaoDespesaPlanejada('')
    setValorDespesaPlanejada('')
  }

  function removerDespesaPlanejada(index) {
    setDespesasPlanejadas({
      ...despesasPlanejadas,
      [mes]: despesasPlanejadas[mes].filter(
        (_, i) => i !== index
      )
    })
  }

  function adicionarInvestimentoPlanejado() {
    if (valorInvestimentoPlanejado === '') return

    setInvestimentosPlanejados({
      ...investimentosPlanejados,
      [mes]: [
        ...(investimentosPlanejados[mes] || []),
        {
          descricao: descricaoInvestimentoPlanejado,
          valor: Number(valorInvestimentoPlanejado)
        }
      ]
    })

    setDescricaoInvestimentoPlanejado('')
    setValorInvestimentoPlanejado('')
  }

  function removerInvestimentoPlanejado(index) {
    setInvestimentosPlanejados({
      ...investimentosPlanejados,
      [mes]: investimentosPlanejados[mes].filter(
        (_, i) => i !== index
      )
    })
  }

  function adicionarFundoPlanejado() {
    if (valorFundoPlanejado === '') return

    setFundosPlanejados({
      ...fundosPlanejados,
      [mes]: [
        ...(fundosPlanejados[mes] || []),
        {
          descricao: descricaoFundoPlanejado,
          valor: Number(valorFundoPlanejado)
        }
      ]
    })

    setDescricaoFundoPlanejado('')
    setValorFundoPlanejado('')
  }

  function removerFundoPlanejado(index) {
    setFundosPlanejados({
      ...fundosPlanejados,
      [mes]: fundosPlanejados[mes].filter(
        (_, i) => i !== index
      )
    })
  }

  /* -------------------------
     TOTAIS
  ------------------------- */

  const totalReceitas = receitasDoMes.reduce(
    (total, receita) => total + receita.valor,
    0
  )

  const totalDespesas = despesasDoMes.reduce(
    (total, despesa) => total + despesa.valor,
    0
  )

  const totalInvestimentos = investimentosDoMes.reduce(
    (total, investimento) => total + investimento.valor,
    0
  )

  const totalFundoEmergencia = fundoDoMes.reduce(
    (total, fundo) => total + fundo.valor,
    0
  )

  const totalReceitaPlanejada = receitasPlanejadasDoMes.reduce(
    (total, receita) => total + receita.valor,
    0
  )
  const totalDespesaPlanejada = despesasPlanejadasDoMes.reduce(
    (total, despesa) => total + despesa.valor,
    0
  )
  const totalInvestimentoPlanejado =
    investimentosPlanejadosDoMes.reduce(
      (total, investimento) => total + investimento.valor,
      0
    )

  const totalFundoPlanejado =
    fundosPlanejadosDoMes.reduce(
      (total, fundo) => total + fundo.valor,
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

  return (
    <div className="container">

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
                            removerReceita(index)
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
                            removerDespesa(index)
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
                            removerInvestimento(index)
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
                    (Emergencia, index) => (

                      <div
                        className="transaction"
                        key={index}
                      >

                        <span>
                          {Emergencia.descricao}
                        </span>

                        <span className="transaction-value">
                          {Emergencia.valor.toFixed(2)} €
                        </span>

                        <button
                          className="delete-button"
                          type="button"
                          onClick={() =>
                            removerFundo(index)
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

          {/* PLANEJADO */}
        <div className="box">
          <div className="section-header">
            <div>
              <span className="eyebrow">Planejamento</span>
            </div>

            <div className="monthly-balance">
              <span className="eyebrow">SALDO PLANEJADO</span>
              <strong className={saldoPlanejado < 0 ? 'negative' : ''}>
                {saldoPlanejado.toFixed(2)} €
              </strong>
            </div>
          </div>

          <div className="summary-grid">

            <div className="summary-card income-card">
              <button
                className="finance-card-button"
                type="button"
                onClick={() => alternarDropdown('receitaPlanejada')}
              >
                <div>
                  <span className="card-label">Receitas</span>
                  <h3>{totalReceitaPlanejada.toFixed(2)} €</h3>
                </div>

                <span className="card-arrow">
                  {dropdownAberto === 'receitaPlanejada' ? '−' : '+'}
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
                        setDescricaoReceitaPlanejada(event.target.value)
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Valor"
                      value={valorReceitaPlanejada}
                      onChange={(event) =>
                        setValorReceitaPlanejada(event.target.value)
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
                    </div>
  
                  )}


          </div>

          <div
            className={`summary-card expense-card ${
              dropdownAberto === 'despesaPlanejada'
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


            {/* DROPDOWN DESPESAS PLANEJADAS */}

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


                {/* LISTA DE DESPESAS PLANEJADAS */}

                <div className="transactions">

                  {despesasPlanejadasDoMes.map(
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
                            removerDespesaPlanejada(index)
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

                  Total: {totalDespesaPlanejada.toFixed(2)} €

                </div>

              </div>

            )}

          </div>

          <div
            className={`summary-card investment-card ${
              dropdownAberto === 'investimentoPlanejado'
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
                            removerInvestimentoPlanejado(index)
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


          <div
            className={`summary-card emergency-card ${
              dropdownAberto === 'fundoPlanejado'
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
                    (fundo, index) => (

                      <div
                        className="transaction"
                        key={index}
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
                            removerFundoPlanejado(index)
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
      </div>

      </section>
    </div>
  )
}

export default App