import React from 'react'

const GifsNavigator = ({navigatorFunctions, states}) => {

    const { loadFirst, loadLast, loadNext, loadPrevious } = navigatorFunctions;
    const {index, allGifs} = states;

    return (
        <div>
            <form className='navigator' onSubmit={(e) => { e.preventDefault(); }} action="">
                <button onClick={loadFirst} className="first">First</button>
                {
                    (index === 1) ?
                        <button disabled className="previous">&lt;</button>
                        :
                        <button onClick={loadPrevious} className="previous">&lt;</button>
                }
                <p>Page</p>
                <p>{index}</p>
                <p>of</p>
                <p>{allGifs.length / 10}</p>
                {
                    (index === allGifs.length / 10) ?
                        <button disabled className="previous">&gt;</button>
                        :
                        <button onClick={loadNext} className="previous">&gt;</button>
                }
                <button onClick={loadLast} className="last">Last</button>
            </form>
        </div>
    )
}

export default GifsNavigator