import { useState } from 'react'
import MailchimpSubscribe from './MailchimpSubscribe'
import CustomForm from './CustomForm'

const RightHeroBlock = () => {
  const [inputMessage, setInputMessage] = useState('')

  const addUrl =
    'https://litprotocol.us20.list-manage.com/subscribe/post?u=37eeb6bbc8f1fee01838fd9df&id=4f37de62dc'

  return (
    <div>
      <MailchimpSubscribe
        url={addUrl}
        render={({ subscribe, status, message }) => {
          return (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )
        }}
      />
    </div>
  )
}

export default RightHeroBlock
