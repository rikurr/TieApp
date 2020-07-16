import React from 'react';
import styled from 'styled-components';
import p1 from '../../assets/logo/react-logo.jpg';
import { Button, Avatar, Chip, Typography } from '@material-ui/core';
import { MarginTop } from './MarginTop';

function FeatureProject() {
  return (
    <>
      <Typography variant='h2' style={{ textAlign: 'center' }}>
        Feature Projects
      </Typography>
      <MarginTop mt={6} />
      <FeatureProjects>
        <div>
          <Filters>
            <h2>フィルター</h2>
            <div className='all-filters'>
              <div className='filter-section'>
                <strong>カテゴリー</strong>
                <Filter>
                  <input type='checkbox' /> Hats
                </Filter>
                <Filter>
                  <input type='checkbox' /> Shoes
                </Filter>
                <Filter>
                  <input type='checkbox' /> Sunglasses
                </Filter>
                <Filter>
                  <input type='checkbox' /> hooodi
                </Filter>
              </div>
              <div className='filter-section'>
                <strong>categories</strong>
                <Filter>
                  <input type='checkbox' /> Hats
                </Filter>
                <Filter>
                  <input type='checkbox' /> Shoes
                </Filter>
                <Filter>
                  <input type='checkbox' /> Sunglasses
                </Filter>
                <Filter>
                  <input type='checkbox' /> hooodi
                </Filter>
              </div>
            </div>
          </Filters>
        </div>
        <div className='feature-Project-grid'>
          <div className='feature-Project-item'>
            <FeatureProjectsItemImage
              style={{ backgroundImage: `url(${p1})` }}
            ></FeatureProjectsItemImage>
            <FeatureProjectContent>
              <h3>フーディー</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <Button>view item</Button>
            </FeatureProjectContent>
          </div>
          <div className='feature-Project-item'>
            <FeatureProjectsItemImage
              style={{ backgroundImage: `url(${p1})` }}
            ></FeatureProjectsItemImage>
            <FeatureProjectContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: 8 }}>RR</Avatar>
                <p style={{ margin: 0, fontWeight: 'bold' }}>riku</p>
              </div>
              <MarginTop mt={2} />
              <Typography variant='h5'>MERN スタック開発</Typography>
              <p>
                MongoDB, Express, React and
                Node.jsを使用しWebアプリケーションの作成をします。
              </p>
              <ChipWrap>
                <Chip
                  size='small'
                  avatar={<Avatar>F</Avatar>}
                  label='React'
                  color='primary'
                />
                <Chip
                  size='small'
                  avatar={<Avatar>F</Avatar>}
                  label='Express'
                  color='primary'
                />
                <Chip
                  size='small'
                  avatar={<Avatar>B</Avatar>}
                  label='MongoDB'
                  color='primary'
                />
                <Chip
                  size='small'
                  avatar={<Avatar>B</Avatar>}
                  label='Node.js'
                  color='primary'
                />
                <Chip
                  size='small'
                  avatar={<Avatar>B</Avatar>}
                  label='Typescript'
                  color='primary'
                />
              </ChipWrap>
            </FeatureProjectContent>
          </div>
          <div className='feature-Project-item'>
            <FeatureProjectsItemImage
              style={{ backgroundImage: `url(${p1})` }}
            ></FeatureProjectsItemImage>
            <FeatureProjectContent>
              <h3>title</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <Button>view item</Button>
            </FeatureProjectContent>
          </div>
          <div className='feature-Project-item'>
            <FeatureProjectsItemImage
              style={{ backgroundImage: `url(${p1})` }}
            ></FeatureProjectsItemImage>
            <FeatureProjectContent>
              <h3>title</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <Button>view item</Button>
            </FeatureProjectContent>
          </div>
          <div className='feature-Project-item'>
            <FeatureProjectsItemImage
              style={{ backgroundImage: `url(${p1})` }}
            ></FeatureProjectsItemImage>
            <FeatureProjectContent>
              <h3>title</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <Button>view item</Button>
            </FeatureProjectContent>
          </div>
          <div className='feature-Project-item'>
            <FeatureProjectsItemImage
              style={{ backgroundImage: `url(${p1})` }}
            ></FeatureProjectsItemImage>
            <FeatureProjectContent>
              <h3>title</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <Button>view item</Button>
            </FeatureProjectContent>
          </div>
        </div>
      </FeatureProjects>
      <MarginTop mt={4} />
    </>
  );
}

const FeatureProjects = styled.section`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 20px;
  .feature-Project-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
  }
  .feature-Project-item {
    cursor: pointer;
    background: ${(p) => p.theme.palette.background.paper};
    border: 1px solid ${(p) => p.theme.palette.divider};

    border-radius: 4px;
    overflow: hidden;
    :hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 1000px) {
    .feature-Project-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 800px) {
    .feature-Project-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureProjectsItemImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FeatureProjectContent = styled.div`
  margin-top: 8px;
  padding: 8px;
`;

const Filters = styled.div`
  background: ${(p) => p.theme.palette.background.paper};
  border: 1px solid ${(p) => p.theme.palette.background.paper};
  border-radius: 4px;
  padding: ${(p) => p.theme.spacing(5)}px;
  .filter-section {
    margin-top: ${(p) => p.theme.spacing(5)}px;
  }
  .filter-section > strong {
    margin-top: 10px;
    color: ${(p) => p.theme.palette.background.paper};
    display: block;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    .all-filters {
      display: flex;
      flex-wrap: wrap;
    }
    .filter-section {
      margin-right: 60px;
    }
  }
`;

const Filter = styled.label`
  display: block;
  margin-top: 4px;
`;

const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-top: ${(p) => p.theme.spacing(1)}px;
    margin-right: ${(p) => p.theme.spacing(1)}px;
  }
`;

export { FeatureProject };
