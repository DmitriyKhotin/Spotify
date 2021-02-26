import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './Searcher.scss'
import { paths } from '../../config/routes'
import store from '../../store/RootStore'

const Searcher: FC = () => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const history = useHistory()

  const clearInput = () => {
    setValue('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
    history.replace(paths.SEARCH)
  }

  console.log(history)

  useEffect(() => {
    const timer = setTimeout(() => {
      // store.searchStore.fetch(history.location.pathname)
    }, 250)
    if (value) {
      history.replace(
        paths.SEARCH + '/' + (value.slice(-1) !== '/' ? value : '%2F')
      )
    }

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return (
    <div className="searcher">
      <input
        ref={inputRef}
        className="searcher__input"
        type="text"
        placeholder="Поиск"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
        spellCheck={false}
      />
      {!value ? (
        <label className="searcher__label loupe" />
      ) : (
        <button className="searcher__label cross" onClick={clearInput} />
      )}
    </div>
  )
}

export default Searcher
