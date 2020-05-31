import React from 'react'


function ProExpCard(props) {
    const proExpItem = props.proExpItem

    // To display date
    function dateDisplay(proExpItem)
    {
        if (proExpItem.current)
        {
            return (
                <p style={{color: "#08AF24"}}>{proExpItem.startDate + " - Present"}</p>
            )
        }
        else
        {
            return (
                <p style={{color: "#084C61"}}>{proExpItem.startDate + " - " + proExpItem.endDate}</p>
            )
        }
    }

    return (
        <div id="pro-content-card">      
            <div className="title-loc-and-company">
                <p className="employer">{proExpItem.employer}</p>
                <p className="job-title">{proExpItem.jobTitle}</p>
                <p className="location">{`${proExpItem.city}, ${proExpItem.country}`}</p>
            </div>

            <div className="image-container">
                <img alt="office-building" src={require(`../../img/professional/${proExpItem.photo}`)} />
            </div>

            <div className="date-and-description">
                <h4 className="date">{dateDisplay(proExpItem)}</h4>
                <p className="job-exp-desc">{proExpItem.description}</p>
            </div>
        </div>
    )
}

export default ProExpCard 