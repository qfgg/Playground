import React, { Component } from 'react';


export default class BaseInfo extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: false
  //   };
  // }

  // componentDidMount() {
  //   document.addEventListener('click', this.handleDocumentClick, false);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleDocumentClick, false);
  // }

  // handleDocumentClick = (evt) => {
  //   if (this.win && !this.win.contains(evt.target) && this.link &&
  //     !this.link.contains(evt.target)) {
  //     this.setState({ isOpen: false });
  //   }
  // };

  openWindow = (ciNo) => {
    // this.setState({ isOpen: true });
    window.open(`http://ntree.navercorp.com/public/cmdb/ci-view.html?ciNo=${ciNo}`);
  };

  openWindowHNm = routerNo =>
    window.open(`http://nms2.navercorp.com/monitor/main?monitorType=Device&monitorId=${routerNo}`);

  render() {
    // const { isOpen } = this.state;
    const { routerSearchRes } = this.props;
    const {
      hostNm,
      mdlCdNm,
      locCdNm,
      ciNo,
      ipAddr,
      admEmpNm,
      routerNo
    } = routerSearchRes || {};

    return (
      <div className="base-info">
        <div>
          <span className="bold-title">Base info</span>
          <table className="table table-bordered lg">
            <thead>
              <tr>
                <th>Hostname</th>
                <th>Model</th>
                <th>Location</th>
                <th>CI No</th>
                <th>IP</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a onClick={this.openWindowHNm.bind(null, routerNo)}>
                    {hostNm || '-'}
                  </a>
                </td>
                <td>{mdlCdNm || '-'}</td>
                <td>{locCdNm || '-'}</td>
                <td>
                  <a onClick={this.openWindow.bind(null, ciNo)}>
                    {ciNo || '-'}
                  </a>
                </td>
                <td>{ipAddr || '-'}</td>
                <td>{admEmpNm || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered sm">
            <tbody>
              <tr>
                <th>Hostname</th>
                <td>
                  <a onClick={this.openWindowHNm.bind(null, routerNo)}>
                    {hostNm || '-'}
                  </a>
                </td>
              </tr>
              <tr>
                <th>Model</th>
                <td>{mdlCdNm || '-'}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{locCdNm || '-'}</td>
              </tr>
              <tr>
                <th>CI No</th>
                <td>
                  <a onClick={this.openWindow.bind(null, ciNo)}>
                    {ciNo || '-'}
                  </a>
                </td>
              </tr>
              <tr>
                <th>IP</th>
                <td>{ipAddr || '-'}</td>
              </tr>
              <tr>
                <th>Admin</th>
                <td>{admEmpNm || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {
          // isOpen ?
          //   (<div className="ntree-window" ref={w => this.win = w}>
          //     <iframe
          //       src={`http://ntree.navercorp.com/public/cmdb/ci-view.html?ciNo=${ciNo}`}
          //       width="100%"
          //       height="100%"
          //       title="ntree"
          //     />
          //   </div>) : ''
        }
      </div>
    );
  }
}
