import React from "react";
import { CurrencyBitcoin,CashCoin,CartCheck,Coin } from 'react-bootstrap-icons';

const Information=()=>
{
    return(
      <div className="my-5 p-3 background-overlay">
          <h1 className="my-3 text-center">Information</h1>
          <div className="m-auto w-75 mt-5">
              <p>Whilst minting, ShitPunks utilized a provably fair system with randomization, this meant that everyone who minted one of the original 10,000 had an equal chance of minting a rare Shitpunk. If you are reading this now and missed the original mint don't lose hope. Join the discord, trade, barter and enter competitions to get your very own.</p>
          </div>
          <div className="d-flex flex-wrap justify-content-center my-5">
              <div className="text-center p-3">
                  <a rel="noopener noreferrer" target="_blank" href={'https://google.com'} className="text-decoration-none text-white">
                  <div className="feature-boxes">
                      <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center">
                          <CurrencyBitcoin className="fs-1"/>
                      </div>
                  </div>
                  </a>
                  <h4 className="my-3">Feature 1</h4>
                  <p className="w-50 m-auto">During the mint, 5% of every mint fee was redistributed to existing ShitPunk holders.</p>
              </div>
              <div className="text-center p-3">
                  <a rel="noopener noreferrer" target="_blank" href={'https://google.com'} className="text-decoration-none text-white">
                  <div className="feature-boxes">
                      <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center">
                          <CashCoin className="fs-1"/>
                      </div>
                  </div></a>
                  <h4 className="my-3">Feature 1</h4>
                  <p className="w-50 m-auto">During the mint, 5% of every mint fee was redistributed to existing ShitPunk holders.</p>
              </div>
              <div className="text-center p-3">
                  <a rel="noopener noreferrer" target="_blank" href={'https://google.com'} className="text-decoration-none text-white">
                      <div className="feature-boxes">
                        <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center">
                            <CartCheck className="fs-1"/>
                        </div>
                    </div>
                  </a>
                  <h4 className="my-3">Feature 1</h4>
                  <p className="w-50 m-auto">During the mint, 5% of every mint fee was redistributed to existing ShitPunk holders.</p>
              </div>
              <div className="text-center p-3">
                  <a rel="noopener noreferrer" target="_blank" href={'https://google.com'} className="text-decoration-none text-white">
                  <div className="feature-boxes">
                      <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center">
                          <Coin className="fs-1"/>
                      </div>
                  </div>
                  </a>
                  <h4 className="my-3">Feature 1</h4>
                  <p className="w-50 m-auto">During the mint, 5% of every mint fee was redistributed to existing ShitPunk holders.</p>
              </div>
          </div>
      </div>
    );
}
export default Information;
