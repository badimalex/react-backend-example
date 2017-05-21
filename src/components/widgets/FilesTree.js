import React from 'react';
import { List, Image } from 'semantic-ui-react'
import Link from 'components/ui/Link';


const FilesTree = ({ files }) => (
  <div>
    { files &&
      <List>
        {files.map((file, i) => {
            return (
            <List.Item key={i}>
              <Image src={file.url} size='mini' />
              <List.Content>
                <List.Description as={Link} to={file.url} target='_blank'>{file.name}</List.Description>
              </List.Content>
            </List.Item>
          )
        })}
      </List> }
  </div>
);

export default FilesTree;
