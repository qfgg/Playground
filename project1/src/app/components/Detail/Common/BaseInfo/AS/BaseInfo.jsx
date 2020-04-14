import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatNum } from '../../../../../helper';


export default class BaseInfo extends Component {
  render() {
    const { asSearchRes } = this.props;
    const { as, asNm, prfxOrgnCnt, prfxAncCnt, peerCnt, avgPathLen } = asSearchRes || {};
    const pOC = prfxOrgnCnt ? formatNum(prfxOrgnCnt) : '-';
    const pAC = prfxAncCnt ? formatNum(prfxAncCnt) : '-';
    const pC = peerCnt ? formatNum(peerCnt) : '-';
    const aPL = avgPathLen ? formatNum(avgPathLen) : '-';

    return (
      <div className="base-info">
        <div>
          <span className="bold-title">Base info</span>
          <table className="table table-bordered lg">
            <thead>
              <tr>
                <th>AS</th>
                <th>AS Name</th>
                <th>Prefixes Originated</th>
                <th>Prefixes Announced</th>
                <th>BGP Peers Observed</th>
                <th>Average AS Path Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{as || '-'}</td>
                <td>{asNm || '-'}</td>
                <td>{pOC || '-'}</td>
                <td>{pAC || '-'}</td>
                <td>{pC || '-'}</td>
                <td>{aPL || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered sm">
            <tbody>
              <tr>
                <th>AS</th>
                <td>{as || '-'}</td>
              </tr>
              <tr>
                <th>AS Name</th>
                <td>{asNm || '-'}</td>
              </tr>
              <tr>
                <th>Prefixes Originated</th>
                <td>{pOC || '-'}</td>
              </tr>
              <tr>
                <th>Prefixes Announced</th>
                <td>{pAC || '-'}</td>
              </tr>
              <tr>
                <th>BGP Peers Observed</th>
                <td>{pC || '-'}</td>
              </tr>
              <tr>
                <th>Average AS Path Length</th>
                <td>{aPL || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

BaseInfo.propTypes = {
  asSearchRes: PropTypes.object,
};
