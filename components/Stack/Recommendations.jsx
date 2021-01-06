import { useState } from 'react'
import { Zap } from 'react-feather'
import { Input, Textarea } from '../Input'
import ReCAPTCHA from "react-google-recaptcha";

export default function Recommendations() {
  const [message, setMessage] = useState('')

  const [serverState, setServerState] = useState({
    submitting: false,
    submitted: false,
    error: false,
  })

  function onChange(e) {
    setMessage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true, submitted: false, error: false })

    fetch('https://formspree.io/f/xbjpqleq', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        setServerState({
          submitting: false,
          submitted: true,
          error: false,
        })
        form.reset()
        setMessage('')
      } else {
        response.json().then((data) => {
          setServerState({
            submitting: false,
            submitted: true,
            error: data.error,
          })
        })
      }
    })
  }

  return (
    <div className="flex flex-col p-6 mt-8 space-y-3 bg-gray-100 rounded-lg dark:bg-gray-900">
      <div className="flex items-center">
        <Zap size={20} className="mr-3 text-gray-900 dark:text-gray-100" />
        <p className="font-semibold text-gray-900 dark:text-gray-100">
          Recommendations
        </p>
      </div>
      <p className="font-normal text-gray-900 dark:text-gray-300">
        My stack is a curated list of tools and software that I use daily. In
        general, less is more. But I’m always interested in discovering great
        new apps and tools – let me know what I should check out.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 space-y-4">
        <input
          type="hidden"
          value={`New stack recommendation`}
          id={'stack'}
          name="_subject"
          readOnly
        />
        <label>
          <span className="sr-only">Message</span>
          <Textarea
            onChange={onChange}
            value={message}
            id="message"
            name="message"
            placeholder="What should I check out?"
          ></Textarea>
        </label>

        <div className="grid grid-cols-1 gap-3">
          <label>
            <span className="sr-only">Email</span>

            <Input
              id="feedback-email"
              name="email"
              placeholder="(Optional) Your email"
              type="email"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <ReCAPTCHA
            sitekey="6LcCaiIaAAAAAB05iow5AHamyN-kZFUHNcQ3CR3v"
            theme="dark"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="btn btn-primary"
            disabled={serverState.submitting || !message}
            type="submit"
          >
            Send feedback
          </button>
        </div>
        {serverState.submitted &&
          (serverState.error ? (
            <p className="p-3 text-white bg-red-500 rounded">
              {serverState.error}
            </p>
          ) : (
            <p className="p-3 text-center text-white bg-green-500 rounded">
              Thanks for the recommendation!
            </p>
          ))}
      </form>
    </div>
  )
}
