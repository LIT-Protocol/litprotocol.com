import React, { useEffect, useState } from 'react'
import { Button, Columns, PartBlock, Title } from 'components'
import { ShareModal } from 'lit-access-control-conditions-modal'
import LitJsSdk from 'lit-js-sdk'

import styles from './designed-for-developers.module.scss'

const formatCodeForCodeblock = async (accessControlConditions) => {
  const humanized = await LitJsSdk.humanizeAccessControlConditions({
    accessControlConditions,
  })
  const formattedAccessControlConditions = JSON.stringify(
    accessControlConditions,
    null,
    2,
  )
    .split('\n')
    .map((t, idx) => (idx == 0 ? t : `  ${t}`))
    .join('\n')
  return `
  // Decryption Condition: ${humanized}
  const accessControlConditions = ${formattedAccessControlConditions}
  `
}

const DesignedForDevelopers = () => {
  const [showingShareModal, setShowingShareModal] = useState(false)
  const [codeblockContent, setCodeblockContent] = useState('')
  const [tokenList, setTokenList] = useState(null)

  useEffect(() => {
    const go = async () => {
      const formatted = await formatCodeForCodeblock([
        {
          contractAddress: '',
          standardContractType: '',
          chain: 'ethereum',
          method: 'eth_getBalance',
          parameters: [':userAddress', 'latest'],
          returnValueTest: {
            comparator: '>=',
            value: '10000000000000',
          },
        },
      ])
      setCodeblockContent(formatted)
      const tokens = await LitJsSdk.getTokenList()
      setTokenList(tokens)
    }
    go()
  }, [])

  const handleReadTheDocs = () => {}

  const handleCreateRequirement = () => {
    setShowingShareModal(true)
  }

  const onAccessControlConditionsSelected = async (accessControlConditions) => {
    console.log('onAccessControlConditionsSelected', accessControlConditions)
    setShowingShareModal(false)
    const formatted = await formatCodeForCodeblock(accessControlConditions)
    setCodeblockContent(formatted)
  }

  return (
    <>
      <PartBlock className={styles.wrapper}>
        <Columns className={styles.inner}>
          <div>
            <Title white value="Designed For Developers" />

            <div>
              <p>
                The tools to connect blockchains to each other and the rest of
                the world.
              </p>
              <p>
                Our focus is on building the right abstractions so your teams
                can start integrating access control functionality now and avoid
                stitching together disparate systems later.
              </p>
            </div>
            <Button
              className={styles.readTheDocsButton}
              type="tertiary"
              onClick={handleReadTheDocs}
            >
              Read the Docs
            </Button>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.codeBlockContainer}>
              <p className={styles.codeBlockText}>
                Create an access control requirement
              </p>
              <textarea className={styles.codeBlock} value={codeblockContent} />
            </div>
            <Button
              className={styles.createRequirementButton}
              type="primary"
              onClick={handleCreateRequirement}
            >
              Create Requirement
            </Button>
          </div>
        </Columns>
      </PartBlock>
      {showingShareModal ? (
        <ShareModal
          onClose={() => setShowingShareModal(false)}
          sharingItems={[]}
          onAccessControlConditionsSelected={onAccessControlConditionsSelected}
          getSharingLink={() => 'test'}
          showStep={'ableToAccess'}
          tokenList={tokenList}
        />
      ) : null}
    </>
  )
}

export default DesignedForDevelopers
