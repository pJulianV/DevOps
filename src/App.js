import React, { Fragment, useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';
import Spinner from './components/Spinner';

function App() {
      //state Definition

    const [amount, saveAmount ] = useState(0)
    const [term, saveTerm ] = useState('')
    const [total, saveTotal ] = useState(0)
    const [loader, saveLoader ] = useState(false)

    let component;

    if (loader) {
      component = <Spinner />
    } else if (total === 0 ) {
      component = <Message />
    } else {
      component = <Result
                    total={total}
                    term={term}
                    amount={amount}
                  />
    }

  return (
    <Fragment>
      <Header title="Tu Reactizador de préstamos" />
      <div className='container'>
        <Form
          amount={amount}
          saveAmount={saveAmount}
          term={term}
          saveTerm={saveTerm}  
          saveTotal={saveTotal}
          saveLoader={saveLoader}
        />
        <div className='messages' >
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
