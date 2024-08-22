import Icon from "../../utils/Icon"

const ProspectingCopilot = () => {

  const items = [
    {
      label : 'Can you help me write a prospecting email?'
    },
    {
      label : 'Write a sequence to one of my accounts'
    }, 
    {
      label : 'Craft a follow-up message for a prospect'
    }, 
    {
      label : 'Can you write me a custom LinkedIn message'
    }
  ]

  return (
    <div>
       <div className='w-[85vw] h-screen flex-col items-center flex justify-center'>
      <div className='flex flex-col items-center gap-1'>
        <div>
          <Icon name={'prospectingLogo'} size='70' className='mx-3' />
        </div>
        <div className='font-bold text-2xl'>Prospecting CoPilot</div>
        <div>Analyzes business scenarios and crafts tailored outreach messages</div>
      </div>
      <div>
        <div className='mt-4'>
            <div className="flex items-center justify-center gap-5">
            {items.map((item, index) => (
              <div key={index} className='border-[1px] border-[#E9E9E9] rounded-md shadow-lg p-4 max-w-[12vw] text-start text-black h-[16vh] text-wrap flex items-center justify-center'>
                <div className='flex items-center gap-2'>
                  <div>{item.label}</div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default ProspectingCopilot