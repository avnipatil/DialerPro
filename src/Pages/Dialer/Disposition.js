const Disposition = () => {
    return (
        <>
            <div className='Disposition-Layout'>
                <h5 className='campg_dethead' style={{ textAlign: 'start' }}>Disposition</h5>
                <div>
                    <input type="radio" id="Connected" value="Connected" name='Disposition' />
                    <label className='mx-2' >Connected</label><br />
                    <input type="radio" id="AnsMachine" value="AnsMachine" name="Disposition" />
                    <label className='mx-2' >AnsMachine</label><br />
                    <input type="radio" id="Callback" value="Callback" name="Disposition" />
                    <label className='mx-2' >Callback</label><br />
                    <input type="radio" id="DNCL" value="DNCL" name="Disposition" />
                    <label className='mx-2' >DNCL</label><br />
                    <input type="radio" id="Incorrect" value="Incorrect" name="Disposition" />
                    <label className='mx-2' >Incorrect Number</label><br />
                    <input type="radio" id="Busy" value="Busy" name="Disposition" />
                    <label className='mx-2'>Busy</label><br />
                    <input type="radio" id="DataMatched" value="DataMatched" name="Disposition" />
                    <label className='mx-2' >Data Matched</label><br />
                </div>
                <button className='SubmitBtn mt-3'>Submit</button>
            </div>
        </>
    )
}
export default Disposition;