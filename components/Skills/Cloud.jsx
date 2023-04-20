import React from 'react'

const Cloud = () => {
  return (
    <>
    <center>
    <div className="skills__content">
        <h3 className="skills__title">Dev Tools</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <i className="bx bxl-git"></i>

                    <div>
                        <h3 className='skills__name'>Git Bash</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-behance'></i>

                    <div>
                        <h3 className='skills__name'>Behance</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-dribbble'></i>

                    <div>
                        <h3 className='skills__name'>Dribble</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    </center>
    </>
  )
}

export default Cloud