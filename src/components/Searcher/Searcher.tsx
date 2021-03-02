import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './Searcher.scss'
import { paths } from '@config/routes'
import store from '@store/RootStore'
import Pointer from '@components/Pointer'

const Searcher: FC = () => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const history = useHistory()

  const clearInput = () => {
    history.replace(paths.SEARCH)
    setValue('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    if (value) {
      const query = value.replace(/\//g, '%2F')
      timer = setTimeout(() => {
        store.searchStore.fetch(value)
        history.replace(paths.SEARCH + '/' + query)
      }, 250)
    } else {
      timer ? clearTimeout(timer) : ''
      const path = history.location.pathname
      if (history.action === 'POP') {
        const pathValue = path.slice(8)
        pathValue.includes('/')
          ? history.replace(paths.SEARCH)
          : setValue(pathValue)
      } else if (history.action === 'REPLACE') {
        history.replace(paths.SEARCH)
        store.searchStore.setTracksVoid()
      }
    }

    return () => {
      timer ? clearTimeout(timer) : ''
    }
  }, [value])

  return (
    <div>
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
      {!value && <Pointer text="Введите название трека" />}
    </div>
  )
}

export default Searcher
