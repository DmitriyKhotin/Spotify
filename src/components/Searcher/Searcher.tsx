import React, { ChangeEvent, FC, useRef, useState } from 'react'
import './Searcher.scss'

const Searcher: FC = () => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const clearInput = () => {
    setValue('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

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
