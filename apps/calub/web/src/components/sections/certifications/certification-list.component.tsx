import React from 'react';

import {
  CertificationsMeta,
  CertificationItem,
  DEFAULT_CERTIFICATIONS_META
} from '../../../models';

import classes from './certification-list.module.scss';

interface CertificationListComponentProps {
  meta: CertificationsMeta;
  items: CertificationItem[];
}

const CertificationListComponent: React.FC<CertificationListComponentProps> = ({
  meta = DEFAULT_CERTIFICATIONS_META,
  items = []
}) => {
  return (
    <>
      <div className={classes.container}>
        <ul className={classes.list}>
          {items.map((item) => {
            let title = <h3 className={classes.title}>{item.title}</h3>;
            if (item.credentialUrl && item.credentialUrl !== '') {
              title = (
                <h3 className={classes.title}>
                  <a href={item.credentialUrl}>{item.title}</a>
                </h3>
              );
            }

            return (
              <li key={item.title}>
                <div className={classes.certification}>
                  {title}

                  <div className={classes.meta}>{createSubHeaderItems(meta, item)}</div>

                  {item.children && (
                    <div className={classes.children}>
                      <CertificationListComponent meta={meta} items={item.children} />
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const createSubHeaderItems = (meta: CertificationsMeta, item: CertificationItem): JSX.Element => {
  const items: JSX.Element[] = [];
  (meta.subHeaderItems || []).map((subHeaderItem) => {
    switch (subHeaderItem) {
      case 'credentialType':
        items.push(
          <span>
            <span className={classes.key}>Credential Type:</span>
            <span className={classes.value}>{mapCredentialTypeValue(meta, item)}</span>
          </span>
        );
        break;
      case 'credentialId':
        items.push(
          <span>
            <span className={classes.key}>Credential ID:</span>
            <span className={classes.value}>
              <a href={item.verificationUrl} className={classes.url}>
                {item.credentialId}
              </a>
            </span>
          </span>
        );
        break;
      case 'issuingOrganization':
        items.push(
          <span>
            <span className={classes.key}>Issuer:</span>
            <span className={classes.value}>{mapIssuingOrganizationValue(meta, item)}</span>
          </span>
        );
        break;
      case 'issuedDate':
        items.push(
          <span>
            <span className={classes.key}>Issued Date:</span>
            <span className={classes.value}>{item.issuedDate}</span>
          </span>
        );
        break;
      case 'gradeAchieved':
        items.push(
          <span>
            <span className={classes.key}>Grade Achieved:</span>
            <span className={classes.value}>{item.gradeAchieved}</span>
          </span>
        );
        break;
    }
  });

  return (
    <>
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {!!index && <span className={classes.divider}>|</span>}
            {item}
          </React.Fragment>
        );
      })}
    </>
  );
};

const mapCredentialTypeValue = (meta: CertificationsMeta, item: CertificationItem): JSX.Element => {
  const key = item.credentialType || '';
  const results = meta.credentialTypeMapping.filter((mapItem) => mapItem.key === key);

  if (results.length === 0) {
    return <>{item.credentialType}</>;
  }

  const mapping = results[0];
  return <>{mapping.displayName}</>;
};

const mapIssuingOrganizationValue = (
  meta: CertificationsMeta,
  item: CertificationItem
): JSX.Element => {
  const key = item.issuingOrganization || '';
  const results = meta.issuingOrganizationMapping.filter((mapItem) => mapItem.key === key);

  if (results.length === 0) {
    return <>{item.issuingOrganization}</>;
  }

  const mapping = results[0];
  if (mapping.url) {
    return (
      <>
        <a href={mapping.url}>{mapping.displayName}</a>
      </>
    );
  }

  return <>{mapping.displayName}</>;
};

export default CertificationListComponent;