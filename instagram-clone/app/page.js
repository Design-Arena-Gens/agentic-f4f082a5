'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Search, Home, Compass, Film, User, PlusSquare } from 'lucide-react';

export default function Instagram() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'travelphotography',
      userAvatar: '🌍',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: 2847,
      caption: 'Sunset views from the mountains 🏔️',
      comments: 42,
      timeAgo: '2 hours ago',
      liked: false
    },
    {
      id: 2,
      username: 'foodiedelights',
      userAvatar: '🍕',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
      likes: 1523,
      caption: 'Homemade pizza perfection 🍕✨',
      comments: 28,
      timeAgo: '5 hours ago',
      liked: false
    },
    {
      id: 3,
      username: 'artsy_aesthetic',
      userAvatar: '🎨',
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&h=600&fit=crop',
      likes: 3421,
      caption: 'Modern art installations downtown',
      comments: 67,
      timeAgo: '1 day ago',
      liked: false
    },
    {
      id: 4,
      username: 'fitnessjourney',
      userAvatar: '💪',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop',
      likes: 892,
      caption: 'Morning workout complete! #fitness #motivation',
      comments: 15,
      timeAgo: '3 hours ago',
      liked: false
    }
  ]);

  const [stories] = useState([
    { id: 1, username: 'Your Story', avatar: '📸', isOwn: true },
    { id: 2, username: 'bestfriend', avatar: '👋' },
    { id: 3, username: 'coffee_lover', avatar: '☕' },
    { id: 4, username: 'tech_news', avatar: '💻' },
    { id: 5, username: 'music_daily', avatar: '🎵' },
    { id: 6, username: 'pet_corner', avatar: '🐶' },
  ]);

  const toggleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #dbdbdb',
        padding: '8px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '935px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontFamily: 'cursive',
            fontSize: '24px',
            margin: 0,
            fontWeight: 'normal'
          }}>Instagram</h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            backgroundColor: '#efefef',
            borderRadius: '8px',
            width: '250px'
          }}>
            <Search size={16} color="#8e8e8e" />
            <input
              type="text"
              placeholder="Search"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                outline: 'none',
                width: '100%',
                fontSize: '14px'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <Home size={24} style={{ cursor: 'pointer' }} />
            <Send size={24} style={{ cursor: 'pointer' }} />
            <PlusSquare size={24} style={{ cursor: 'pointer' }} />
            <Compass size={24} style={{ cursor: 'pointer' }} />
            <Heart size={24} style={{ cursor: 'pointer' }} />
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#e1e1e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              <User size={16} />
            </div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '935px', margin: '0 auto', padding: '30px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '30px' }}>
          {/* Left Column - Stories & Feed */}
          <div>
            {/* Stories */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #dbdbdb',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '24px',
              display: 'flex',
              gap: '16px',
              overflowX: 'auto'
            }}>
              {stories.map(story => (
                <div key={story.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: story.isOwn ? '#e1e1e1' : 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    padding: '2px',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px'
                    }}>
                      {story.avatar}
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', maxWidth: '64px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {story.username}
                  </span>
                </div>
              ))}
            </div>

            {/* Posts */}
            {posts.map(post => (
              <div key={post.id} style={{
                backgroundColor: 'white',
                border: '1px solid #dbdbdb',
                borderRadius: '8px',
                marginBottom: '24px'
              }}>
                {/* Post Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#e1e1e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px'
                    }}>
                      {post.userAvatar}
                    </div>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>{post.username}</span>
                  </div>
                  <MoreHorizontal size={20} style={{ cursor: 'pointer' }} />
                </div>

                {/* Post Image */}
                <img
                  src={post.image}
                  alt={post.caption}
                  style={{
                    width: '100%',
                    display: 'block',
                    backgroundColor: '#f0f0f0'
                  }}
                />

                {/* Post Actions */}
                <div style={{ padding: '8px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <Heart
                        size={24}
                        style={{ cursor: 'pointer' }}
                        fill={post.liked ? '#ed4956' : 'none'}
                        color={post.liked ? '#ed4956' : 'black'}
                        onClick={() => toggleLike(post.id)}
                      />
                      <MessageCircle size={24} style={{ cursor: 'pointer' }} />
                      <Send size={24} style={{ cursor: 'pointer' }} />
                    </div>
                    <Bookmark size={24} style={{ cursor: 'pointer' }} />
                  </div>

                  {/* Likes */}
                  <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>
                    {post.likes.toLocaleString()} likes
                  </div>

                  {/* Caption */}
                  <div style={{ fontSize: '14px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '600', marginRight: '6px' }}>{post.username}</span>
                    <span>{post.caption}</span>
                  </div>

                  {/* View Comments */}
                  <div style={{ color: '#8e8e8e', fontSize: '14px', marginBottom: '8px', cursor: 'pointer' }}>
                    View all {post.comments} comments
                  </div>

                  {/* Time */}
                  <div style={{ color: '#8e8e8e', fontSize: '10px', textTransform: 'uppercase' }}>
                    {post.timeAgo}
                  </div>
                </div>

                {/* Add Comment */}
                <div style={{
                  borderTop: '1px solid #efefef',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    style={{
                      border: 'none',
                      outline: 'none',
                      flex: 1,
                      fontSize: '14px'
                    }}
                  />
                  <button style={{
                    color: '#0095f6',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
                  }}>
                    Post
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Suggestions */}
          <div style={{ position: 'sticky', top: '84px', height: 'fit-content' }}>
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #dbdbdb',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#e1e1e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px'
                }}>
                  👤
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>yourusername</div>
                  <div style={{ color: '#8e8e8e', fontSize: '14px' }}>Your Name</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <span style={{ fontWeight: '600', fontSize: '14px', color: '#8e8e8e' }}>
                  Suggestions For You
                </span>
                <span style={{ fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
                  See All
                </span>
              </div>

              {[
                { username: 'photographer_pro', name: 'Photography Pro', avatar: '📷' },
                { username: 'design_inspo', name: 'Design Inspiration', avatar: '🎨' },
                { username: 'travel_world', name: 'Travel World', avatar: '✈️' },
                { username: 'food_heaven', name: 'Food Heaven', avatar: '🍔' },
                { username: 'tech_updates', name: 'Tech Updates', avatar: '🚀' }
              ].map((user, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#e1e1e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px'
                    }}>
                      {user.avatar}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '14px' }}>{user.username}</div>
                      <div style={{ color: '#8e8e8e', fontSize: '12px' }}>{user.name}</div>
                    </div>
                  </div>
                  <button style={{
                    color: '#0095f6',
                    fontWeight: '600',
                    fontSize: '12px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
                  }}>
                    Follow
                  </button>
                </div>
              ))}

              <div style={{
                marginTop: '24px',
                fontSize: '11px',
                color: '#c7c7c7',
                lineHeight: '1.5'
              }}>
                About · Help · Press · API · Jobs · Privacy · Terms
                <br />
                Locations · Language · Meta Verified
                <br /><br />
                © 2024 INSTAGRAM CLONE
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
